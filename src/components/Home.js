import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="home-main">
      <div className="homename">
        <h1>Home</h1>
        <hr className="homehr" />
      </div>
      <div className="home">
        <div className="home-cont" id="home-info">
          <div className="home-info-intro">
            <h1>
              Heyyyy !!
              <br />
              This is ROSHAN PRRTE.
            </h1 >
            <h1 id="typ-an">I am a
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  " Front-end Developer.",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  " React-Developer.",
                  1000,
                  " Web Designer",
                  1000,
                  
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "27px",fontWeight:"400",color:"#ffb600", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div className="home-info-work">
            I'm passionate about building excellent websites. I specialize in
            building websites based on React js.
          </div>
        </div>
        <div className="varticle">
          <hr />
        </div>
        <div className="home-cont" id="home-dev-img">
          <img style={{ width: "400px" }} src="dev-img1.png" alt="dev " />
        </div>
      </div>
    </div>
  );
}
