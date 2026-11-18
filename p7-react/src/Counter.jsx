import { useState } from "react";

function Counter({ title = "Counter Component", step = 1 }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="display-value">{count}</div>
      <div className="btn-group">
        <button className="btn-danger" onClick={() => setCount(count - step)}>
          - {step}
        </button>
        <button className="btn-secondary" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn-success" onClick={() => setCount(count + step)}>
          + {step}
        </button>
      </div>
    </div>
  );
}

export default Counter;