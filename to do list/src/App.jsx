import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Row1 from "./components/Row1.jsx";

import Appname from "./components/Appname.jsx";

import Row2 from "./components/Row2.jsx";
import Row3 from "./components/Row3.jsx";




let arr=[{name:'banana',
  date:'27/04/2024'


},{
  name:'milk',
  date:'50/04/2042'
}]

function App() {
  return (
    <>
      <Appname></Appname>
      <Row3></Row3>

      <Row1 arr={arr}></Row1>
     
    </>
  );
}

export default App;
