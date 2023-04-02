import React, { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [data, setData]= useState();
  const url = "http://127.0.0.1:8000";

  const getData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      {
        data
        ?<div>{data.Hello}</div>
        :<button onClick={getData}>データを取得</button>
      }
    </div>
  );
}

export default App;
