import ColorClient from "./color-client";
import NumberServer from "./number-server";

const random = () => Math.random() * 255;

export default function ColorServer() {
  return (
    <div>
      <div
        style={{
          height: "50px",
          width: "50px",
          backgroundColor: `rgb(${random()}, ${random()}, ${random()})`,
          borderRadius: "50%",
        }}
      ></div>
      <ColorClient>
        <NumberServer></NumberServer>
      </ColorClient>
    </div>
  );
}
