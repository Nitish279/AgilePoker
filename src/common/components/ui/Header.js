import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full text-white flex justify-start items-center shadow-lg p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex items-center h-full px-4">
        <Link href="/" passHref>
          <img
            src="/images/lseg-logo.svg"
            alt="LSEG Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
    </header>
  );
}
