import React, { useEffect } from "react";
import gsap from "gsap";
import laptopImage from "./img/macbook-air.svg";

const Laptop = (props) => {
  useEffect(() => {
    const list = document.querySelectorAll(".laptopScreen_img_" + props.id); // NodeList
    const ar = [].slice.call(list); // BOOM, returns an array.
    const reverse_ar = ar.reverse();
    let tl = gsap.timeline({ repeat: -1 });
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
    deviceImageArray = images.map((image) => (
      <img
        className={"laptopScreen_img_" + props.id}
        key={image}
        src={image}
        alt={props.id}
      />
    ));
  }
  deviceImageArray = deviceImageArray.reverse();
  return (
    <div className="wrapper-laptop">
      <div className="laptop">
        <img className="laptop--macbook" src={laptopImage} alt="laptop" />
        <div className="laptop--slideshow">
          <img
            className="laptop_img_bg"
            src={props.deviceImages[0]}
            alt={props.id}
          />

          {deviceImageArray}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
