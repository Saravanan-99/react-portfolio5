import React from "react";
import { Parallax } from "react-scroll-parallax";
import Phone from "../phone/phone.js";
import Laptop from "../laptop/laptop.js";
import { ReactComponent as Shape4 } from "./img/shape-4-outline.svg";
import Image from "../parallaxImage.js";

const Workpanel = (props) => {
  let alignClass = "copyLeft";
  props.align === "copy-left"
    ? (alignClass = "copy-left")
    : (alignClass = "copy-right");
  // Let's get our challenges array and convert the elements to list items.
  let challengeItems;
  if (props.challenges) {
    const challenges = props.challenges;
    challengeItems = challenges.map((challenge) => (
      <li key={challenge}>{challenge}</li>
    ));
  }

  // Setup our Role display if prop has been supplied

  const renderRole = () => {
    if (props.role) {
      return (
        <div className="tabs--role">
          <b>Role: </b>
          {props.role}
        </div>
      );
    }
  };

  // Render the button if a link is supplied.
  const renderLink = () => {
    if (props.link) {
      return (
        <a
          className="section-work--link btn"
          href={props.link}
          rel="noreferrer nofollow"
        >
          Go to Project
        </a>
      );
    }
  };

  // Setup device markup (laptop or phone).
  let deviceMarkup;
  if (props.device === "phone") {
    deviceMarkup = (
      <Phone
        id={props.id}
        device={props.device}
        deviceImages={props.deviceImages}
      />
    );
  } else if (props.device === "laptop") {
    deviceMarkup = (
      <Laptop
        id={props.id}
        device={props.device}
        deviceImages={props.deviceImages}
      />
    );
  }

  return (
    <div
      className={"section section-work " + alignClass}
      style={{ backgroundColor: props.bgColor }}
    >
      <div className="section-work--image">
        <Parallax
          className="work-image--bg"
          disabled={props.parallaxDisabled}
          y={[-10, 10]}
        >
          <Image src={props.bgImage} alt={props.id} />
        </Parallax>
        <div className="work-image--shape">
          <Shape4 />
        </div>
        <Parallax
          className="work-image--fg"
          y={[-60, 0]}
          disabled={props.parallaxDisabled}
        >
          {deviceMarkup}
        </Parallax>
      </div>
      <div className="section-work--copy">
        <h2 style={{ color: props.color }}>{props.title}</h2>
        <p>{props.copy}</p>
      </div>

      <div className="section-work--base">
        {challengeItems && <p>The key challenges for this project included:</p>}

        <ul className="tabs--challenges">{challengeItems}</ul>

        {renderRole()}
        {renderLink()}
      </div>
    </div>
  );
};

export default Workpanel;
