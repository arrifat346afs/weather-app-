import "./css/App.css";
import Scarch from "./component/Scarch";
import { useState } from "react";

const API_KEY = "911c12b46fee4dba8c5133138252002";

const BASE_URL = "http://api.weatherapi.com/v1";

function App() {
  const [first, setfirst] = useState("")
  return (
    <>
      
      <Scarch />
    </>
  );
}

export default App;
