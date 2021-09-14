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

import React from "react";
import ReactDom from "react-dom";

const date = new Date();
var currentTime = date.getHours();

console.log(currentTime);

let greeting;
let rang;

if (currentTime < 12) {
  greeting = "Good Morning";
  rang = "green";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  rang = "yellow";
} else {
  greeting = "Good night";
  rang = "brown";
}

ReactDom.render(
  <h1 className="heading" style={{ color: rang }}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
