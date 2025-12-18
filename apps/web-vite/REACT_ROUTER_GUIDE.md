# React Router with Layout - Learning Guide

## 📚 What You've Built

A React Router application with a persistent sidebar layout that demonstrates:

- **Client-side routing** using React Router v7
- **Persistent layouts** that don't re-render during navigation
- **Three demo pages** (Home, About, Contact)
- **Responsive design** that works on mobile and desktop

## 🏗️ Project Structure

```
web-vite/
├── src/
│   ├── components/
│   │   ├── Layout.tsx      # Main layout with sidebar
│   │   └── Layout.css      # Layout styles
│   ├── pages/
│   │   ├── Home.tsx        # Home page
│   │   ├── About.tsx       # About page
│   │   └── Contact.tsx     # Contact page with form
│   ├── App.tsx             # Router configuration
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── vite.config.ts
├── tsconfig.json
├── index.html
└── package.json
```

## 🔑 Key Concepts

### 1. **Layout Pattern with Outlet**

The magic behind a non-rerendering sidebar is using `<Outlet />`:

```tsx
// Layout.tsx
export const Layout = () => {
  return (
    <div className="layout">
      <aside className="sidebar">{/* Sidebar stays persistent */}</aside>

      <main className="content">
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
};
```

The `<Outlet />` component is where child routes are rendered. When navigating between routes, only the content inside `<Outlet />` updates, not the entire Layout component.

### 2. **Route Configuration**

```tsx
// App.tsx
<Routes>
  <Route element={<Layout />}>
    <Route index element={<Home />} /> {/* /          */}
    <Route path="/about" element={<About />} /> {/* /about     */}
    <Route path="/contact" element={<Contact />} /> {/* /contact   */}
  </Route>
  <Route path="*" element={<Navigate to="/" />} /> {/* 404 fallback */}
</Routes>
```

This nested route structure ensures:

- The Layout component mounts only once
- Child routes swap in/out without affecting the Layout
- The sidebar never re-renders unnecessarily

### 3. **Navigation with Links**

```tsx
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
```

`<Link>` components provide client-side navigation without page reload, triggering route changes smoothly.

## 🚀 Running the App

```bash
# From the root monorepo
pnpm dev

# Or from this app specifically
cd apps/web-vite
pnpm dev

# Then visit http://localhost:3001
```

## 📖 Learning Points

### Why Sidebar Doesn't Re-render

1. **Route Nesting**: The `Layout` is the parent route and mounts once
2. **Outlet Rendering**: Only child content updates when routes change
3. **Stability**: React's reconciliation keeps the Layout instance stable
4. **Performance**: No unnecessary re-renders = better performance

### Benefits of This Pattern

✅ **Performance**: Sidebar state/components don't re-initialize  
✅ **Smooth Transitions**: Easy to add page transition animations  
✅ **Consistent State**: Sidebar can maintain state across pages  
✅ **Responsive**: Can collapse/expand without remounting

## 🎯 Next Steps to Enhance

### Add Active Link Styling

```tsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/"
  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
>
  Home
</NavLink>;
```

### Add Page Transitions with Framer Motion

```bash
pnpm add framer-motion
```

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
>
  <Outlet />
</motion.div>;
```

### Add Nested Routes

```tsx
<Route path="/products" element={<ProductLayout />}>
  <Route index element={<ProductList />} />
  <Route path=":id" element={<ProductDetail />} />
</Route>
```

### Persist Sidebar State

```tsx
const [sidebarOpen, setSidebarOpen] = useState(true)

// This state persists across navigation!
<button onClick={() => setSidebarOpen(!sidebarOpen)}>
  Toggle Sidebar
</button>
```

## 📚 React Router Documentation

- [Official Docs](https://reactrouter.com/)
- [useNavigate Hook](https://reactrouter.com/en/main/hooks/use-navigate)
- [useParams Hook](https://reactrouter.com/en/main/hooks/use-params)
- [useLocation Hook](https://reactrouter.com/en/main/hooks/use-location)
- [Loaders & Actions](https://reactrouter.com/en/main/route/loader)

## 💡 Common Patterns

### Data Fetching with useEffect

```tsx
import { useEffect, useState } from "react";

export const DataPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []); // Fetch on mount

  return <div>{data}</div>;
};
```

### URL Parameters

```tsx
// Route definition
<Route path="/user/:id" element={<UserDetail />} />;

// Component
import { useParams } from "react-router-dom";

export const UserDetail = () => {
  const { id } = useParams();
  return <div>User {id}</div>;
};
```

### Query Parameters

```tsx
import { useSearchParams } from "react-router-dom";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  return <div>Searching for: {query}</div>;
};
```

## 🔗 Cross-linking Example

To link from one page to another with state:

```tsx
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about", { state: { from: "home" } })}>
      Go to About
    </button>
  );
};

// In About page
import { useLocation } from "react-router-dom";

export const About = () => {
  const location = useLocation();
  console.log(location.state?.from); // 'home'
};
```

## 🎨 Styling Tips

The CSS uses:

- **Flexbox** for layout
- **CSS Variables** in `:root` for theming
- **Transitions** for smooth interactions
- **Mobile-first** responsive design
- **BEM naming** for CSS classes

Try modifying `Layout.css` to customize colors and spacing!

## ✨ Tips for Learning

1. **Open DevTools**: Inspect React components with React DevTools extension
2. **Check Console**: See navigation logs with `console.log` in route changes
3. **Experiment**: Try adding new routes and pages
4. **Profile**: Use React DevTools Profiler to see what re-renders
5. **Read Docs**: React Router has excellent documentation

Happy Learning! 🚀
