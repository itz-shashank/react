import { useState, useCallback, useEffect,useRef} from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");
const passwordRef=useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass)
  }, [length, numberAllowed, charAllowed]);

const copypasswordToClipBoard=useCallback(()=>{
passwordRef.current?.select()

  window.navigator.clipboard.writeText(password)
},[password])


  useEffect(() => {
    passwordgenerator();
  }, [length, numberAllowed, charAllowed, passwordgenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 my-12 text-orange-500 bg-gray-800 ">
        <h1 className="text-white text-center text-2xl font-semibold mb-6">
          Password Generator
        </h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 bg-gray-600">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="outline-none w-full py-2 px-4 text-gray-200 bg-transparent"
            placeholder="Your Generated Password"
          />
          <button className="outline-none bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 shrink-0 transition-all" onClick={copypasswordToClipBoard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointor"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberinput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterinput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
