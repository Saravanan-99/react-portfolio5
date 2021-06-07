import React, { useEffect } from "react";
import { gsap } from "gsap";
const Header = () => {
  const handleScroll = () => {
    const position = window.pageYOffset;
    const heroHeight = document.getElementById("hero").clientHeight;
    if (position >= heroHeight) {
      document.getElementById("header").classList.add("nav--inverted");
    } else {
      document.getElementById("header").classList.remove("nav--inverted");
    }
  };
  useEffect(() => {
    const mobileTrigger = document.getElementById("nav--mobile");
    gsap.set(mobileTrigger, { opacity: 0, height: 0 });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let menuActive = false;
  function toggleMenu() {
    const element = document.getElementById("menu_toggle");
    element.classList.toggle("open");
    const mobileMenu = document.getElementById("nav--mobile");
    // menu.classList.toggle('active')
    if (menuActive === false) {
      gsap.to(mobileMenu, { opacity: 1, height: "100%", duration: 0.3 });
      menuActive = true;
    } else {
      gsap.to(mobileMenu, { opacity: 0, height: 0, duration: 0.3 });
      menuActive = false;
    }
  }

  return (
    <div id="header" className="header">
      <a href="#hero" className="logo--wrapper">
        <div className="logo">x</div>
      </a>
      <nav className="nav--desktop" role="navigation">
        <div id="menu_toggle" className="menu_toggle" onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </div>
        <ul>
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>

      <nav id="nav--mobile" className="nav--mobile" role="navigation">
        <div className="logo">mcg</div>
        <ul>
          <li>
            <a href="#work" onClick={toggleMenu}>
              work
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              about
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              skills
            </a>
          </li>
          <li>
            <a href="mailto:nobody@email.com">
              <img
                src="/assets/img/icon-email.svg"
                alt="Email Me"
                className="icon-email"
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/img/icon-linked-in.svg"
                alt="Connect on Linked In"
                className="icon-linkedin"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
