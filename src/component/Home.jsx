import React from "react";
import Scarch from "./component/Scarch";
import { useState } from "react";
const Home = () => {
  const [scarchTarm, setScarchTaem] = useState("");
  return (
    <div>
      <Scarch scarchTarm={scarchTarm} setScarchTaem={setScarchTaem} />
    </div>
  );
};

export default Home;
