import React, { useState } from "react";

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultExpandedIds?: string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultExpandedIds = [],
  className = "",
}) => {
  const [expanded, setExpanded] = useState<string[]>(defaultExpandedIds);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setExpanded((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setExpanded((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-slate-200 rounded-lg border border-slate-200 dark:divide-slate-800 dark:border-slate-800 ${className}`}>
      {items.map((item) => {
        const isOpen = expanded.includes(item.id);
        return (
          <div key={item.id} className="bg-white dark:bg-slate-900">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between p-4 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none dark:text-white dark:hover:bg-slate-800"
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <svg
                className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isOpen && (
              <div className="border-t border-slate-100 p-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
