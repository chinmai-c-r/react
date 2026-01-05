import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Navigation</h2>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/users" className="nav-link">
            Users
          </Link>
        </nav>
        <div className="sidebar-footer">
          <p>© 2025 My App</p>
        </div>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
