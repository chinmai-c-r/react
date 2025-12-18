export const About = () => {
  return (
    <div className="page">
      <h1>ℹ️ About</h1>
      <p>Learn more about our application and how it works.</p>
      <div className="card">
        <h3>About This App</h3>
        <p>
          This is a demonstration of React Router with a layout pattern where
          the sidebar persists across page navigation without re-rendering.
        </p>
        <p>
          The key to this pattern is using the <code>&lt;Outlet /&gt;</code>{" "}
          component from React Router, which allows the layout to remain stable
          while child routes are rendered and updated independently.
        </p>
      </div>
    </div>
  );
};
