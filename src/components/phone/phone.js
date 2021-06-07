import React, { useEffect } from "react";
import gsap from "gsap";
import phoneImage from "./img/google-pixel-5.png";

const Phone = (props) => {
  useEffect(() => {
    const list = document.querySelectorAll(".phoneScreen_img_" + props.id); // NodeList
    const ar = [].slice.call(list); // BOOM, returns an array.
    const reverse_ar = ar.reverse();
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(reverse_ar, {
      autoAlpha: 0,
      stagger: 3, // space each element's animation out by 0.5 seconds
      delay: 4,
      duration: 0.8,
    });
  });

  let deviceImageArray;
  if (props.deviceImages) {
    const images = props.deviceImages;
    deviceImageArray = images.map((image, index) => (
      <img
        className={"phoneScreen_img_" + props.id}
        key={image + index}
        src={image}
        alt={props.id}
      />
    ));
  }
  deviceImageArray = deviceImageArray.reverse();
  return (
    <div className="wrapper-phone">
      <div className="phone">
        <img className="phone--pixel" src={phoneImage} alt="phone" />
        <div className="phone--slideshow">
          <img
            className="phoneScreen_img_bg"
            src={props.deviceImages[0]}
            alt={props.id}
          />

          {deviceImageArray}
        </div>
      </div>
    </div>
  );
};

export default Phone;
