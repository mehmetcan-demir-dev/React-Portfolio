import React from "react";
import "./intro.css";
import bg from "../../assets/me1.png";
import { Link } from "react-scroll";
import Resume from "../../files/resume.pdf";
import cvImg from "../../assets/resume.png";

const Intro = () => {
  
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Mehmetcan</span>
            <br />
            Full-Stack Web Developer
          </span>
          <p className="introPara">
            👋 Hi, I'm a passionate full-stack Web developer based in the
            vibrant city of Izmir, Turkey 🇹🇷.<br/> With a deep love for coding and a
            knack for problem-solving, <br/> I thrive in the world of web development.
          </p>
          <Link>
            <button className="btn"
              onClick={() => {
                window.location.href = Resume;
              }}
            >
              <a
                href={Resume}
                download
                target="_blank"
                rel="noreferrer"
                className="btnResume"
              >
              <img src={cvImg} alt="cvImg" className="btnCvImg" />
                For Resume
              </a>
            </button>
          </Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
      </section>
    </>
  );
};

export default Intro;
