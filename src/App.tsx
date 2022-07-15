import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Slider />
    </div>
  );
}

export default App;
