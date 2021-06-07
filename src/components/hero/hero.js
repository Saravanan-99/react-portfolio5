import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ReactComponent as Shape1 } from "./img/shape-1.svg";
import { ReactComponent as Shape2 } from "./img/shape-2.svg";
import { ReactComponent as Shape3 } from "./img/shape-3.svg";
import { ReactComponent as Shape4 } from "./img/shape-4.svg";

const Hero = (props) => {
  return (
    <div id="hero" className="section section-hero">
      <Parallax
        className="shape shape--1"
        x={[-40, 40]}
        y={[-40, 40]}
        disabled={props.parallaxDisabled}
      >
        <Shape1 />
      </Parallax>
      <Parallax
        className="shape shape--2"
        y={[-20, 20]}
        disabled={props.parallaxDisabled}
      >
        <Shape2 />
      </Parallax>
      <Parallax
        className="shape shape--3"
        y={[0, 40]}
        x={[-20, 0]}
        disabled={props.parallaxDisabled}
      >
        <Shape3 />
      </Parallax>
      <Parallax
        className="shape shape--4"
        y={[-30, 30]}
        disabled={props.parallaxDisabled}
      >
        <Shape4 />
      </Parallax>
      <Parallax
        className="shape shape--5"
        y={[-40, 40]}
        x={[-40, 40]}
        disabled={props.parallaxDisabled}
      >
        <Shape4 />
      </Parallax>
      <div className="section-hero--copy">
        <h1>My Portfolio</h1>
        <p>
          Bob Ross Lipsum dot com. You don't have to be crazy to do this but it
          does help. Poor old tree. The light is your friend. Preserve it. The
          least little bit can do so much. This is a fantastic little painting.
          Little trees and bushes grow however makes them happy.
        </p>
      </div>
    </div>
  );
};

export default Hero;
