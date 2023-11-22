import { useState } from "react";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "X") {
      setInput(input.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="rounded flex items-center justify-center bg-[#333]">
      <div className="calculator border p-6 rounded-lg shadow-md">
        <h1 className="text-2xl text-black font-bold mb-4">
          Simple Calculator
        </h1>
        <div className="input mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="buttons grid grid-cols-4 gap-2">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("X")}>X</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
          <button onClick={() => handleButtonClick("C")}>C</button>
          <button onClick={() => handleButtonClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
