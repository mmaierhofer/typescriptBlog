import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import TextBlock from "../components/TextBlock";

export default function Post() {
  return (
    <>
      <div className="w-full flex flex-col justify-center mt-5">
        <div className="w-full">
          <div
            className="w-full h-24 bg-slate-600 flex items-center justify-start"
            style={{
              backgroundImage:
                "url('//a.storyblok.com/f/139174/741x417/8f95d4abc2/usememo.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="w-10 ml-10 h-10 rounded-full shadow-inner-xl text-slate-80 flex justify-center items-center">
              <Link to="/">
                <FontAwesomeIcon icon={faChevronLeft} />
              </Link>
            </div>
          </div>

          <div className="mt-5 font-bold text-xl pl-10">
            Why you shouldn't overuse the useMemo-Hook
          </div>
          <TextBlock text={""} />
          <CodeBlock />
        </div>
      </div>
    </>
  );
}
