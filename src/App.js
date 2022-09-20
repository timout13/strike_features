import { Stopwatch } from "./components/Stopwatch";
import { Timer } from "./components/Timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Stopwatch />
      <hr />
      <Timer />
    </div>
  );
}

export default App;
