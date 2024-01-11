const random = () => Math.floor(Math.random() * 100);

export default function NumberServer() {
  return <div>{random()}</div>;
}
