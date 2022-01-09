import React from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Props {
  title: string;
  category: string;
  img: string;
  slug: string;
}

export default function Preview({ title, category, img, slug }: Props) {
  const navigate = useNavigate();

  function onHandleRedirect() {
    console.log(`slug ${slug}`);
    navigate(`post/${slug}`);
  }

  return (
    <>
      <div className="p-4" onClick={onHandleRedirect}>
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
