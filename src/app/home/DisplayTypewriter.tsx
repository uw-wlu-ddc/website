"use client";
import { useEffect, useRef } from "react";
import TypeIt from "typeit";

export default function DisplayTypewriter({ className }: { className?: string }) {
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      new TypeIt(elementRef.current, {
        waitUntilVisible: false,
        speed: 100,
        cursorChar: "|",
        deleteSpeed: 50,
      })
        .type("the best in the world")
        .pause(1500)
        .delete(12)
        .pause(1000)
        .type("of both worlds")
        .go();
    }
  }, []);

  return <h4 ref={elementRef} className={className}></h4>;
}