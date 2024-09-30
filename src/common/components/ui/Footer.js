import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full h-16 fixed bottom-0 left-0 bg-blue-600 text-white flex items-center justify-center shadow-lg z-10"
      style={{ backgroundColor: "#001eff" }}
    >
      <div className="text-center">
        <p className="text-sm">
          © 2023 LSEG Agile Planning Poker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
