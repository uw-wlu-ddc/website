"use client";
import TypeIt from "typeit-react";
import TypeItCore from "typeit";

export default function DisplayTypewriter({ className }: { className?: string }) {
  return (
    <TypeIt
      as={"h4"}
      className={className}
      options={{
        waitUntilVisible: false,
        speed: 100,
        cursorChar: "|",
        deleteSpeed: 50,
      }}
      getBeforeInit={(instance: TypeItCore) => {
        instance
          .type("the best in the world")
          .pause(750)
          .delete(12)
          .pause(500)
          .type("of both worlds");
        return instance;
      }}
    />
  );
}
