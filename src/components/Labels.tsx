"use client";

import { useRef, useLayoutEffect, useState, ReactNode } from "react";

export function DShadowLabel({
  className,
  children,
  defaultWidth = 0,
  defaultHeight = 0,
}: {
  className?: string;
  children: ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
}) {
  const primaryBox = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: defaultWidth, height: defaultHeight });

  useLayoutEffect(() => {
    if (primaryBox.current) {
      const { width, height } = primaryBox.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, [children]);

  return (
    <div className="relative">
      <div
        ref={primaryBox}
        className={`absolute left-0 top-0 z-40 px-[3.125rem] py-4 bg-white flex justify-center items-center bordered ${className}`}
      >
        {children}
      </div>
      <div
        className="absolute left-4 top-4 z-30 bg-black bordered"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
      />
      <div
        className="absolute left-7 top-7 z-20 bg-yellow bordered"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
      />
    </div>
  );
}
