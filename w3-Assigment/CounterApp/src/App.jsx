import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const [date, setDate] = useState(new Date());
  const [history, setHistory] = useState([]);

  return (
    <React.Fragment>
      <div className="CounterApp">
        <h1>Counter App </h1>
      </div>

     {
      history.map( function (historyItems) {
        return(
          <div style={{margin:"10px"}} key={historyItems}>
            <span className="time">
              {"Hour " + historyItems.date.getHours()},{"Minutes " + historyItems.date.getMinutes()},
              {"Seconds " + historyItems.date.getSeconds()},
            </span>
            <span style={{margin:"10px", backgroundColor:"green", width:"50px", color:"white"}}>
             {"Count " + historyItems.count}
            </span>
          </div>
        )
      })
     }

      <div className="Btn">
        <button
          onClick={function () {
            setNum(num + 1);
            const oldHistory = [...history]
            oldHistory.push({date : new Date(), count : num })
            setHistory(oldHistory);
          }}
          style={{
            fontSize: "50px",
            marginTop: "10px",
            padding: "20px", 
            width: "100px",
          }}
        >
          {num}
        </button>
      </div>
      
        <button
          onClick={function () {
            setNum(0);
          }}
         style={{width:"100px", padding:"20px", marginTop:"20px", marginLeft:"46.5%", backgroundColor:"skyblue"}}
        >
          Reset
        </button>
    
    </React.Fragment>
  );
}

export default App;
