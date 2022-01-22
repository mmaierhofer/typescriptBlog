import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock() {
  const codeString = `const memoizedValue = useMemo(() => 
    computeExpensiveValue(a, b), [a, b]
    );`;
  return (
    <div className="w-full p-10 text-xs">
      <SyntaxHighlighter language="javascript" style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
