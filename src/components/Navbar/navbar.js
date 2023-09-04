import React, { useState } from "react";
import "./navbar.css";
import logoM from "../../assets/logo-m.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import Menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // Initialize the showMenu state variable with a default value of false
  return (
    <>
      <nav className="navbar">
        <img src={logoM} alt="logoM" className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="desktopMenuListItem"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={1000}
            className="desktopMenuListItem"
          >
            Contact
          </Link>
        </div>

        <button className="desktopMenuBtn" onClick={() => {}}>
          <img className="desktopMenuImg" src={contactImg} alt="" />
          Hit me up!
        </button>
        <img
          src={Menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="listItem"
            onClick={() => setShowMenu(!false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="listItem"
            onClick={() => setShowMenu(!false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="listItem"
            onClick={() => setShowMenu(!false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-10}
            duration={1000}
            className="listItem"
            onClick={() => setShowMenu(!false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
