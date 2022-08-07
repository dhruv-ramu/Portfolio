import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Student",
          "Developer",
          "Science Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
