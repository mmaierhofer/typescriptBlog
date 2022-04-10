import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code }) {
  const concatenateCode = (code) => {
    let formattedCode = "";
    let indentNextLine = false;

    code.forEach((codeItem) => {
      if (codeItem.type === "hard_break") {
        formattedCode += `
`;
      } else {
        if (indentNextLine) {
          formattedCode += "  ";
        }
        formattedCode += codeItem.text;
        if (codeItem.text.slice(-1) === "{") {
          indentNextLine = true;
        } else {
          indentNextLine = false;
        }
      }
      console.log(codeItem.text);
      console.log(formattedCode);
    });
    console.log(formattedCode);
    return formattedCode;
  };

  return (
    <div className="w-full p-10 text-xs">
      <SyntaxHighlighter language="javascript" style={dark}>
        {concatenateCode(code)}
      </SyntaxHighlighter>
    </div>
  );
}
