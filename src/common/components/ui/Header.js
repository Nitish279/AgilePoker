import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="w-full text-white flex justify-start items-center shadow-lg p-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="flex items-center h-full px-4">
        <Link href="/" passHref>
          <Image
            src="/images/lseg-logo.svg"
            alt="LSEG Logo"
            width={150}
            height={150}
            objectFit="contain"
            layout="responsive"
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
