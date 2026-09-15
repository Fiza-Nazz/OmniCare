import React, { useState } from "react";

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "json",
  title,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950 text-slate-200 overflow-hidden shadow-sm ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2 text-xs font-mono">
        <span className="text-slate-400">{title || language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded px-2 py-0.5 text-xs text-slate-300 hover:bg-slate-800 focus:outline-none"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-xs font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};
