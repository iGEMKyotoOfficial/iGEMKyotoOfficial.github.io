import React from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";
import style from "src/styles/tableofcontents.style.module.css";

export type Heading = {
  text: String;
  level: number;
  id: string;
};

export type Props = Array<Heading>;

export default function TableOfContents({ sprops }: { sprops: Props }) {
  const headings = sprops;
  const [activeId, setActiveId] = useState("");
  const [scroll, setScroll] = useState(Number);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id")!;
          if (entry.isIntersecting) {
            setActiveId(id);
            setScroll(window.scrollY);
          } else {
            const diff = scroll - window.scrollY;
            const isScrollingUp = diff > 0;
            const currentIndex = headings.findIndex((h) => h.id === id);
            const prevEntry = headings[currentIndex - 1];
            const prevId = prevEntry?.id;
            if (isScrollingUp && prevId) {
              setActiveId(id);
            }
          }
        });
      },
      {
        rootMargin: "0% 0% -90% 0%",
      },
    );
    headings.forEach((heading) => {
      const elem = document.getElementById(heading.id);
      if (elem) {
        observer.observe(elem);
      }
    });
  });

  return (
    <div className={style.wrapper}>
      <span>Table of Contents</span>
      <ul>
        {headings.map((heading, index) => {
          const id = heading.id || heading.text.toLowerCase();
          const activeClass = activeId === id ? "link-accent" : "";
          //const indent = {
          //    3: "pl-2",
          //};
          //const level = heading.level
          const paddingClass = "pl-2";
          return (
            <li key={index} onClick={() => setActiveId(id)}>
              <a
                href={`#${id}`}
                className={"link" + activeClass + paddingClass}
              >
                {headings[index].text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
