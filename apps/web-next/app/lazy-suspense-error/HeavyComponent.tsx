export default function HeavyComponent() {
  // Imagine this component has lots of code, large libraries, etc.
  return (
    <div
      style={{ marginTop: "20px", padding: "10px", border: "1px solid blue" }}
    >
      <h2>Heavy Component Loaded!</h2>
      <p>This component was lazy loaded only when you clicked the button.</p>
      <p>Check the Network tab in DevTools - this file only loads on demand.</p>
    </div>
  );
}
