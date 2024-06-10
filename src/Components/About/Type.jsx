import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
    return (
        <>
            <Typewriter options={{ strings: ["Full Stack Web Developer", "MEVN/MEAN/MERN Stack Developer", "Chess Enthusiast", "YouTuber", "Blogger"], autoStart: true, loop: true, deleteSpeed: 50 }}
            />
        </>
    );
};
