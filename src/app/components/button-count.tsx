"use client";

import { ReactElement, useState } from "react";

export default function ButtonCount({
  children,
  slot,
}: {
  children?: ReactElement;
  slot?: ReactElement;
}) {
  const [numberClicked, setNumberClicked] = useState(0);

  return (
    <button onClick={() => setNumberClicked(numberClicked + 1)}>
      {children}
      Clicked {numberClicked} Times
      {slot}
    </button>
  );
}
