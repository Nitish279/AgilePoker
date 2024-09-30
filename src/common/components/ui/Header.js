import React from "react";

export default function Header() {
  return (
    <header
      className="w-full fixed top-0 left-0 text-white flex justify-start items-center shadow-lg z-10 p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex items-center h-full px-4">
        <img
          src="/images/lseg-logo.svg"
          alt="LSEG Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </header>
  );
}
