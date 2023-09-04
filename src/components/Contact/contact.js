import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import jQuery from "../../assets/jquery.png";
import MongoDB from "../../assets/mongodb.png";
import NodeJS from "../../assets/nodejs.png";
import Postman from "../../assets/postman.png";
import ReactLogo from "../../assets/react.png";
import VSCode from "../../assets/vscode.png";
import AWS from "../../assets/aws.png";
import SCSS from "../../assets/sass.png";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  const form = useRef(); // Create a reference to the form element

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs
      .sendForm(
        "service_bk08pu5", // Your service ID
        "template_bmi2c2a", // Your template ID
        form.current, // The form element
        "pFVnWNhbuqsuwOPJ8" // Your public key
      )
      .then(() => {
        alert("Message successfully sent!"); // Display a success message
        window.location.reload(false); // Reload the page to clear the form
      })
      .catch((error) => {
        console.error("Error sending email:", error); // Log the error to the console
        alert("Failed to send the message, please try again."); // Display an error message
      });
  };
  return (
    <>
      <section id="contact">
        <div className="contactPage">
          <h1 className="contactPageTitle">Hit me up!</h1>
          <span className="contactDesc">
            Please fill out the form below to start a conversation about
            possible employment opportunities.
          </span>
          <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                rows="5"
                className="msg"
                type="text"
                name="message"
                placeholder="Message"
                required
              />
              <button className="submitBtn" type="submit" value="Send">
                Submit
              </button>
            </form>
            <div className="socMedAndServices">
              <div className="socialMediaLinks">
                <a
                  className="smLinks"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mehmetcan-demir-151a71224"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
                <a
                  className="smLinks"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/mehmetcan-demir-dev"
                >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
                <a
                  className="smLinks"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UC6Ke7K4jXZOoH-DKYH05kgw"
                >
                  <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
              </div>
              <div className="servicesLinks">
                <img src={ReactLogo} alt="ReactLogo" className="link" />
                <img src={MongoDB} alt="MongoDB" className="link" />
                <img src={VSCode} alt="VSCode" className="link" />
                <img src={NodeJS} alt="NodeJS" className="link" />
                <img src={AWS} alt="NodeJS" className="link" />
                <img src={Postman} alt="Postman" className="link" />
                <img src={jQuery} alt="jQuery" className="link" />
                <img src={SCSS} alt="SCSS" className="link" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
