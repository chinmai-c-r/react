import React from "react";
import "./styles.css";

const Position = () => {
  const generateItems = (count: number) =>
    Array.from({ length: count }, (_, i) => (
      <div key={i} className="grid-item">
        {i + 1}
      </div>
    ));

  return (
    <div style={{ padding: "20px" }}>
      <h1>CSS Grid Learning Guide</h1>

      {/* Example 1: Basic Grid */}
      <div>
        <h2>1. Basic Grid (3x3)</h2>
        <p>Simple 3 equal columns × 3 rows of 100px</p>
        <div className="grid">{generateItems(9)}</div>
      </div>

      {/* Example 2: Responsive Grid */}
      <div>
        <h2>2. Different Column Widths (2fr 1fr 1fr)</h2>
        <p>First column is 2x wider than the others</p>
        <div className="grid-responsive">{generateItems(9)}</div>
      </div>

      {/* Example 3: Auto-fit Responsive */}
      <div>
        <h2>3. Auto-fit Responsive Grid</h2>
        <p>
          Automatically adjusts columns based on available space (min 150px)
        </p>
        <div className="grid-auto-fit">{generateItems(12)}</div>
      </div>

      {/* Example 4: Spanning Items */}
      <div>
        <h2>4. Grid with Spanning Items</h2>
        <p>Items can span multiple columns and rows</p>
        <div className="grid-span">{generateItems(12)}</div>
      </div>

      {/* Example 5: Named Grid Areas */}
      <div>
        <h2>5. Layout with Named Grid Areas</h2>
        <p>Using grid-template-areas for semantic layout</p>
        <div className="grid-areas">
          <div className="header">Header</div>
          <div className="sidebar">Sidebar</div>
          <div className="main">Main Content</div>
          <div className="sidebar">Sidebar</div>
          <div className="footer">Footer</div>
        </div>
      </div>

      {/* Example 6: Implicit Grid */}
      <div>
        <h2>6. Implicit Grid</h2>
        <p>When items exceed template rows, they auto-generate new rows</p>
        <div className="grid-implicit">{generateItems(8)}</div>
      </div>

      {/* Cheat Sheet */}
      <div
        style={{
          marginTop: "60px",
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <h2>Quick Reference</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div>
            <h3>Common Properties</h3>
            <code
              style={{
                display: "block",
                background: "white",
                padding: "10px",
                borderRadius: "4px",
                marginBottom: "10px",
                overflow: "auto",
              }}
            >
              display: grid
              <br />
              grid-template-columns: repeat(3, 1fr)
              <br />
              gap: 10px
              <br />
              grid-template-areas
              <br />
            </code>
          </div>
          <div>
            <h3>Item Properties</h3>
            <code
              style={{
                display: "block",
                background: "white",
                padding: "10px",
                borderRadius: "4px",
                overflow: "auto",
              }}
            >
              grid-column: span 2<br />
              grid-row: span 2<br />
              grid-area: main
              <br />
              justify-self: center
              <br />
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Position;
