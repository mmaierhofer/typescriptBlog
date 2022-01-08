import React from "react";
import logo from ".././logo-reverse.png";
import linkedin from ".././assets/linkedin.png";
import instagram from ".././assets/instagram-logo.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <>
      <div className="pb-10 bg-slate-800 w-screen relative bottom-0 flex items-center pt-5 flex-col">
        <img src={logo} alt="logo" className="h-12 rounded-xl w-12" />
        <div className="text-slate-300 w-1/2 text-center mt-5">
          <div>Feel free to contact me on any channel</div>
          <div className="mt-5 flex flex-row justify-between">
            <img src={linkedin} alt="linkedin" className="h-4 invert" />
            <img src={instagram} alt="linkedin" className="h-4 invert" />
            <FontAwesomeIcon icon={faEnvelope} className="h-4" color="white" />
          </div>
          <div className="mt-8 text-sm">
            Everything on this page was written and created by Max Maierhofer
            using React and Storyblok.
          </div>
        </div>
      </div>
    </>
  );
}
