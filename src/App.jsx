import "./css/App.css";
import Scarch from "./component/Scarch";
import { useState } from "react";


function App() {
  const [scarchTarm, setScarchTaem] = useState("")
  return (
    <>
      
      <Scarch scarchTarm={scarchTarm} setScarchTaem={setScarchTaem}/>
    </>
  );
}

export default App;
