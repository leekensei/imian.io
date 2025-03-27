import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import CodeBlock from "@/components/code-block";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-6 md:mt-8 mb-3 md:mb-4 text-3xl md:text-4xl font-bold">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-6 md:mt-8 mb-2 md:mb-3 text-2xl md:text-3xl font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-4 md:mt-6 mb-2 text-xl md:text-2xl font-bold">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="my-3 md:my-4 text-sm md:text-base leading-6 md:leading-7">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href ?? "#"}
        className="text-blue-600 hover:underline dark:text-blue-400 text-sm md:text-base"
      >
        {children}
      </Link>
    ),
    pre: ({ children }) => {
      if (React.isValidElement(children)) {
        const language =
          children.props?.className?.replace("language-", "") || "plaintext";
        const code = children.props?.children || "";
        return <CodeBlock language={language}>{code}</CodeBlock>;
      }
      return <pre>{children}</pre>;
    },
    code: ({ children }) => (
      <code className="!bg-gray-100 dark:!bg-gray-800 px-1 py-0.5 rounded text-sm md:text-base">
        {children}
      </code>
    ),
    ul: ({ children }) => (
      <ul className="my-3 md:my-4 list-disc pl-4 md:pl-6 text-sm md:text-base">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-3 md:my-4 list-decimal pl-4 md:pl-6 text-sm md:text-base">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-3 md:my-4 pl-3 md:pl-4 border-l-4 border-gray-300 dark:border-gray-600 italic text-sm md:text-base">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="my-3 md:my-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-600 text-sm md:text-base">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-3 md:px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">
        {children}
      </th>
    ),
    td: ({ children }) => <td className="px-4 py-2 border-t">{children}</td>,
    ...components,
  };
}
