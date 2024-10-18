// components/ResultDisplay.js
import React from 'react';

const ResultDisplay = ({ result }) => {
  if (Array.isArray(result)) {
    return (
      <div className="result-display">
        <h2>OCR Result</h2>
        <table className="result-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, index) => (
              <tr key={index}>
                <td>{item.label}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div className="result-display">
        <h2>Result</h2>
        <p>{result}</p>
      </div>
    );
  }
};

export default ResultDisplay;