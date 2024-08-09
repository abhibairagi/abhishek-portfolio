import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "Full Stack Developer",
            "MEVN/MERN Stack Developer",
            "Chess Enthusiast",
            "Rider",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};
