import { Stopwatch } from "../components/Stopwatch";
import { Timer } from "../components/Timer";

export function Home() {
  return (
    <div className="App container mx-auto">
      <Stopwatch />
      <hr />
      <Timer />
    </div>
  );
}
