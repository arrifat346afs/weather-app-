import "./css/App.css";
import Scarch from "./component/Scarch";
import { useState } from "react";

const API_KEY = "911c12b46fee4dba8c5133138252002";

const BASE_URL = "http://api.weatherapi.com/v1";

function App() {
  const [scarchTarm, setScarchTaem] = useState("")
  return (
    <>
      
      <Scarch scarchTarm={scarchTarm} setScarchTaem={setScarchTaem}/>
    </>
  );
}

export default App;
