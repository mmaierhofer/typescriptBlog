import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";
import TextBlock from "../components/TextBlock";
import axios from "axios";
import { useParams } from "react-router-dom";

interface response {
  data: {
    story: {
      name: string;
      content: {
        category: string;
        long_text: {
          content: any;
        };
      };
    };
  };
}

export default function Post() {
  let { slug } = useParams();
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.storyblok.com/v1/cdn/stories/${slug}?token=8BoCrozLLHoHgAffVEwy4wtt`
      )
      .then((response: response) => {
        setTitle(response.data.story.name);
        setCategory(response.data.story.content.category);
        setContent(response.data.story.content.long_text.content);
      });
  }, [slug]);

  if (content !== undefined) {
    return (
      <>
        <div className="flex w-full flex-row justify-center ">
          <div className="w-1/2 flex flex-col justify-center mt-5">
            <div className="w-full">
              <div
                className="w-full h-24 bg-slate-600 flex items-center justify-start md:hidden"
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

              <div className="w-full h-24 bg-orange-200 flex items-center justify-start xs:hidden md:visible rounded-2xl">
                <div className="w-10 ml-10 h-10 rounded-full shadow-inner-xl text-slate-80 flex justify-center items-center">
                  <Link to="/">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Link>
                </div>
                <div className="pl-8 text-2xl">{category}</div>
              </div>

              <div className="mt-5 font-bold text-xl pl-10">{title}</div>
              {content.map((contentItem: { content: { text: any } }) => {
                if (contentItem.content) {
                  let contentItemList: any = contentItem.content;
                  if (contentItemList[0].marks === undefined) {
                    return <TextBlock text={contentItemList} />;
                  } else if (contentItemList[0].marks[0].type === "code") {
                    return <CodeBlock code={contentItemList} />;
                  }
                  return <>No code</>;
                }
              })}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}
