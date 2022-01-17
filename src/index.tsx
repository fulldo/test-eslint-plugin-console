import React from "react";
import ReactDOM from "react-dom";

console.log(1234);

console.warn(111111);

const App = () => (
  <h1>My React and TypeScript App!! {new Date().toLocaleDateString()}</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
