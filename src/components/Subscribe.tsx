import React from "react";
import { faTimes, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Subscribe() {
  return (
    <>
      <div className="w-full h-48 flex justify-center items-center mt-5 absolute bottom-5 animate-bounce-start">
        <div className="bg-slate-800 w-11/12 h-full rounded-3xl flex flex-col items-center justify-around pb-4">
          <div className="h-6"></div>
          <div className="absolute top-2 right-6 rounded-full border-gray-400 border h-8 w-8 text-white flex justify-center items-center">
            <FontAwesomeIcon icon={faTimes} color="lightgray" />
          </div>
          <div className="w-5/6 text-2xl cursor-pointer">
            <FontAwesomeIcon icon={faEnvelopeOpen} color="white" />
          </div>
          <div className="w-5/6 mt-2 text-white">
            Subscribe to React Butter's <br /> Newsletter
          </div>
          <div className="w-5/6 bg-orange-200 h-8 rounded-full flex items-center justify-center color-slate-800 font-bold">
            Subscribe
          </div>
        </div>
      </div>
    </>
  );
}
