import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full h-16 bg-blue-600 text-white flex items-center justify-center shadow-lg"
      style={{ backgroundColor: "#001eff" }}
    >
      <div className="text-center">
        <p className="text-sm">
          © 2024 LSEG Agile Planning Poker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
