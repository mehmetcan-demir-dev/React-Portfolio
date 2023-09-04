import React from "react";
import "./skills.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
const Skills = () => {
  return (
    <>
      <section id="skills">
        <span className="skillTitle">My Services</span>
        <span className="skillDescription">
          "Thank you for visiting my 'My Services' page. I have particular
          expertise in Node.js, React, HTML, and CSS for developing websites and
          web applications. For backend programming and API work, I also have
          experience with MongoDB, MSSQL, C#,.NET, and Postman. Let's work
          together to make your digital initiatives come to life.
        </span>
        
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#61DBFB" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
