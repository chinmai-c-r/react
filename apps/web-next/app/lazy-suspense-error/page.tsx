"use client";

import React, { useState, Suspense, lazy, ReactNode, useEffect } from "react";

// Lazy load this component
const HeavyComponent = lazy(() => import("./HeavyComponent"));
const BrokenComponent = lazy(() => import("./BrokenComponent"));

// Error Boundary - catches errors from child components
class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Error caught:", error.message);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "10px", border: "2px solid red", color: "red" }}>
          <h2>Something went wrong!</h2>
          <p>The component crashed, but the app is still working.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const Test = () => {
  const [showHeavy, setShowHeavy] = useState(false);
  const [showBroken, setShowBroken] = useState(false);

  useEffect(() => {}, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Error Boundaries Example</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setShowHeavy(!showHeavy)}>
          {showHeavy ? "Hide" : "Show"} Working Component
        </button>

        {showHeavy && (
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <HeavyComponent />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>

      <div>
        <button onClick={() => setShowBroken(!showBroken)}>
          {showBroken ? "Hide" : "Show"} Broken Component
        </button>

        {showBroken && (
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <BrokenComponent />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
};

export default Test;
