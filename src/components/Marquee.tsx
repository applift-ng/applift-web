"use client";
import { useEffect, useRef } from "react";

const Marquee = ({ children }: { children: React.ReactNode }) => {
  const marqueeRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = parseInt(
      getComputedStyle(root).getPropertyValue("--marquee-elements-displayed")
    );
    const marqueeContent = marqueeRef.current;

    if (marqueeContent) {
      root.style.setProperty(
        "--marquee-elements",
        marqueeContent.children.length.toString()
      );

      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }
  }, []);

  return (
    <div className="marquee">
      <ul className="marquee-content" ref={marqueeRef}>
        <li>{children}</li>
        <li>{children}</li>
        <li>{children}</li>
        <li>{children}</li>
      </ul>
    </div>
  );
};

export default Marquee;
