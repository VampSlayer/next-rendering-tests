"use client";

import { ReactElement, useState } from "react";

const random = () => Math.random() * 255;

export default function ColorClient({ children }: { children?: ReactElement }) {
  const [rgb, setRgb] = useState([random(), random(), random()]);

  return (
    <div>
      <div
        onClick={() => setRgb([random(), random(), random()])}
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
          borderRadius: "50%",
        }}
      ></div>
      {children}
    </div>
  );
}
