import "./App.css";
import Scarch from "./component/Scarch";

const API_KEY = "911c12b46fee4dba8c5133138252002";

const BASE_URL = "http://api.weatherapi.com/v1";

function App() {
  return (
    <>
      <h1>Hellow worl</h1>
      <Scarch />
    </>
  );
}

export default App;
