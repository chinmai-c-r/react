export const Home = () => {
  return (
    <div className="page">
      <h1>🏠 Home</h1>
      <p>
        Welcome to the home page! This is the first page of our application.
      </p>
      <div className="card">
        <h3>Key Features</h3>
        <ul>
          <li>React Router for client-side routing</li>
          <li>Persistent sidebar that doesn't re-render</li>
          <li>Smooth page transitions</li>
          <li>Responsive layout</li>
        </ul>
      </div>
    </div>
  );
};
