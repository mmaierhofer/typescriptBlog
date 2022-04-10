import React from "react";

interface props {
  text: any;
}

export default function TextBlock({ text }: props) {
  return (
    <>
      <div className="pl-10 pr-10 pt-5 text-justify">{text[0].text}</div>
    </>
  );
}
