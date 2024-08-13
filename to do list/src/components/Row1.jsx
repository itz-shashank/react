import styles from "./Row1.module.css";

function Row1({ arr }) {
  return (
    <>
     
          {arr.map((item) => (
            <>
             <div className="container text-center" >
             <div className="row justify-content-md-center">
              <div className={`${styles.bg} col text-center`} key={item.name}>
                {item.name}
              </div>
              <div className="col-md-auto text-center" key={item.date}>
                {item.date}
              </div>
              <div className="col col-lg-2">
            <button type="button" className="btn btn-success">
              Success
            </button>
            </div>
            </div>
            </div>
            </>
          ))}

         
          
      
      ;
    </>
  );
}
export default Row1;
