import React, { useRef } from "react";
import {
  CivicAuthProvider,
  UserButton
} from "@civic/auth/react";
import Map from "./components/Map";

export default function App({ children }) {
  const iframeContainerRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Civic iframe container - hidden until needed */}
      <div 
        ref={iframeContainerRef} 
        id="civic-iframe-container" 
        className="fixed inset-0 z-50 hidden"
      />

      <CivicAuthProvider
        clientId={import.meta.env.VITE_CIVIC_CLIENT_ID}
        displayMode="iframe"
        iframeDisplayMode="modal"
        targetContainerElement={iframeContainerRef}
      >
        <div className="container mx-auto px-4 py-6">
          {/* Header with auth button */}
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-indigo-700">
              <span className="bg-white px-3 py-1 rounded-lg shadow-sm">FlashCrowd</span>
            </h1>
            <div className="flex items-center space-x-4">
              <UserButton 
                className="bg-white hover:bg-gray-100 text-indigo-700 font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200 border border-indigo-200 flex items-center"
              >
                {/* <span className="mr-2">🔑</span> Auth */}
              </UserButton>
            </div>
          </header>

          {/* Main content */}
          <main className="bg-white rounded-xl shadow-md p-6">
            {children}
          </main>

          {/* Footer */}
          <footer className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} FlashCrowd. All rights reserved.
          </footer>
        </div>
      </CivicAuthProvider>
    </div>
  );
}