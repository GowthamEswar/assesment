import { useState } from "react";

function BraceCombinations() {
  const [n, setN] = useState(3);
  const [braceCombinations, setBraceCombinations] = useState([]);

  const generateBraceCombinations = (n) => {
    const result = [];

    const generateCombination = (current, open, close) => {
      if (current.length === 2 * n) {
        result.push(current);
        return;
      }

      if (open < n) {
        generateCombination(current + "(", open + 1, close);
      }

      if (close < open) {
        generateCombination(current + ")", open, close + 1);
      }
    };

    generateCombination("", 0, 0);
    return result;
  };

  const handleGenerate = () => {
    const combinations = generateBraceCombinations(n);
    setBraceCombinations(combinations);
  };

  return (
    <div>
      <label>
        Number of pairs (n):{" "}
        <input
          type="number"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value))}
        />
      </label>
      <button onClick={handleGenerate}>Generate Combinations</button>

      <div>
        <h2>Generated Brace Combinations:</h2>
        <ul>
          {braceCombinations.map((combination, index) => (
            <li key={index}>{combination}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BraceCombinations;
