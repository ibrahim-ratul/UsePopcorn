import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating maxLength={10} color="blue" size={20} />
    <StarRating maxLength={10} /> */}
    <App />
  </React.StrictMode>
);
