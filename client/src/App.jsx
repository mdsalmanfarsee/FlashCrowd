

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
        clientId={import.meta.env.VITE_CIVIC_CLIENT_ID}
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

