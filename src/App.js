// import logo from './logo.svg';

import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Work from "./components/work/work";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import ParallaxCache from "./components/parallaxcache";

import "./App.scss";

const App = () => {
  const [parallaxDisabled, setParallax] = useState(false);
  const resizeWindow = () => {
    if (window.innerWidth <= 500) {
      setParallax(true);
    } else {
      setParallax(false);
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  return (
    <div className="App">
      <Header />

      <ParallaxProvider>
        <ParallaxCache />
        <Hero parallaxDisabled={parallaxDisabled} />
        <Work parallaxDisabled={parallaxDisabled} />
        <About />
        <Skills />
        <Contact />
      </ParallaxProvider>
    </div>
  );
};

export default App;
