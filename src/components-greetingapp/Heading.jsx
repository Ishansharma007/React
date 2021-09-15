import React from "react";

function Heading() {
  const date = new Date();
  var currentTime = date.getHours();

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

  return (
    <h1 className="heading" style={{ color: rang }}>
      {greeting}
    </h1>
  );
}

export default Heading;
