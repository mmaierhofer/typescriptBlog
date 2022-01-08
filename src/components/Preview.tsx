import React from "react";

interface Props {
  title: string;
  category: string;
  img: string;
}

export default function Preview({ title, category, img }: Props) {
  return (
    <>
      <div className="p-4">
        <div
          className="bg-orange-200 w-64 h-72 rounded-3xl flex justify-center items-end p-2"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
          }}
        >
          <div className="bg-white h-24 rounded-3xl w-full p-4 z-50 opacity-90">
            <div className="text-gray-500 text-xs">{category}</div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </div>
    </>
  );
}
