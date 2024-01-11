"use client";

import { ComponentProps } from "react";

export const button: ComponentProps<"button"> = {
  onClick: () => window.alert("Boo"),
  children: "Boo",
};
