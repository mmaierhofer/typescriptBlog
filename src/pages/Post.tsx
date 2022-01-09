import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <>
      <div className="w-full p-5">
        <div className="w-8 h-8 rounded-full shadow-inner text-slate-800 flex justify-center items-center">
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        </div>
      </div>
    </>
  );
}
