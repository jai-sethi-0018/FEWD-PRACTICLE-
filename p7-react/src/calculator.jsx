import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("0");

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Enter both numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b === 0 ? "Cannot divide by 0" : (a / b).toFixed(2));
        break;
      default:
        break;
    }
  };

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("0");
  };

  return (
    <div className="card">
      <h2>Arithmetic Calculator</h2>
      <div className="input-group">
        <input
          type="number"
          placeholder="First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="btn-group">
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>×</button>
        <button onClick={() => calculate("/")}>÷</button>
        <button className="btn-secondary" onClick={clearAll}>Clear</button>
      </div>

      <div className="result-box">
        Result: <strong>{result}</strong>
      </div>
    </div>
  );
}

export default Calculator;