export default function BrokenComponent() {
  // This throws an error to demonstrate error boundary
  throw new Error("This component intentionally threw an error!");

  // eslint-disable-next-line react/no-unescaped-entities
  return <div>This won't render</div>;
}
