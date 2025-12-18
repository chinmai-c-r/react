import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
