

import React, { useRef } from "react";
import {
  CivicAuthProvider,
  UserButton
} from "@civic/auth/react";

export default function App({ children }) {
  const iframeContainerRef = useRef(null);

  return (
    <>
      {/* Required container for embedded iframe */}
      <div ref={iframeContainerRef} id="civic-iframe-container" />

      <CivicAuthProvider
        clientId="437291ef-bb31-488c-a0ec-5bd511ff8cf6"
        displayMode="iframe"
        iframeDisplayMode="modal"
        targetContainerElement={iframeContainerRef}
      >
        <UserButton />
        {children}
      </CivicAuthProvider>
    </>
  );
}

