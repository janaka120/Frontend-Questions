import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const RemoteAppA = lazy(() => import("app_a/App"));

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/app-a">App A</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<h1>Welcome to Shell</h1>} />
          <Route path="/app-a" element={<RemoteAppA />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
