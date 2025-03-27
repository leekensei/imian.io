"use client";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTheme } from "next-themes";

import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import html from "react-syntax-highlighter/dist/cjs/languages/prism/markup";
import { useState, useLayoutEffect } from "react";

SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("html", html);

interface CodeBlockProps {
  children: string;
  language: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  children,
  language,
  showLineNumbers = true,
}: CodeBlockProps) {
  const { theme } = useTheme();

  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <pre className="relative rounded-lg overflow-hidden">
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
