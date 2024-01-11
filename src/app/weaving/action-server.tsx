import { ComponentProps } from "react";
import ActionClient from "./action-client";

export default function ActionServer({
  buttons,
}: {
  buttons?: ComponentProps<"button">[];
}) {
  return (
    <div>
      <h1>Actions</h1>
      <p>Some Text</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ActionClient buttons={buttons}></ActionClient>
      </div>
    </div>
  );
}
