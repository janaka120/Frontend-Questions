// src/renderer/_default.page.client.jsx
import React from "react";
import { hydrateRoot } from "react-dom/client";

export { render };

function render(pageContext) {
  const { Page, pageProps } = pageContext;
  hydrateRoot(
    document.getElementById("root"),
    <React.StrictMode>
      <Page {...pageProps} />
    </React.StrictMode>
  );
}
