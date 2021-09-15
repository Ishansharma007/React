// import React from "react";
// import ReactDom from "react-dom";
// const config = require("../config.json");

// const date = new Date();
// const year = date.getFullYear();
// const fname = "Ishan";
// const lname = "sharma";

// ReactDom.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">
//       Fav Foods
//     </h1>
//     <ul>
//       <li>Anda</li>
//       <li>Paneer</li>
//     </ul>
//     <div>
//       <img alt="images" src={config.img1} />
//       <img alt="images" src={config.img2} />
//     </div>
//     <p>
//       Created by {fname} {lname} .
//     </p>
//     <p>Copyrigth {year}</p>
//   </div>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDom from "react-dom";
// import App from "./components-greetingapp/App";

// ReactDom.render(<App />, document.getElementById("root"));

// import React from "react";
// import ReactDom from "react-dom";
// import App from "./Components-listapp/app";

// ReactDom.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDom from "react-dom";
import * as Calc from "./components-calculator/Calculator";

ReactDom.render(
  <ul>
    <li>{Calc.Add(7, 5)}</li>
    <li>{Calc.Subtract(7, 5)}</li>
    <li>{Calc.Multiply(7, 5)}</li>
    <li>{Calc.Subtract(7, 5)}</li>
  </ul>,
  document.getElementById("root")
);
