"use client";

import { ComponentProps } from "react";

export default function ActionClient({
  buttons,
}: {
  buttons?: ComponentProps<"button">[];
}) {
  return buttons?.map((button, index) => (
    <button key={index} {...button}></button>
  ));
}
