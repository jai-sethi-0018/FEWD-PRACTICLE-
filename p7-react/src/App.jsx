import Counter from "./Counter";
import Calculator from "./Calculator";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Jai Sethi - React Counter & Calculator</h1>
      <div className="components-grid">
        <Counter title="Standard Counter" step={1} />
        <Counter title="Step-5 Counter" step={5} />
        <Calculator />
      </div>
    </div>
  );
}

export default App;