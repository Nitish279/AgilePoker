import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import CreateName from "../name/CreateName";
import useSelectedStore from "../../../store/selected";
import createRandomNumber from "../../../../utils/createRandomNumber";

export default function CreateRoom() {
  const router = useRouter();

  const [selectedType, setSelectedType] = useState("fibonacci");

  const selectDefault = useSelectedStore((state) => state.selectDefault);

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="flex flex-col items-center justify-center w-[27vw]">
        <CreateName />

        <div className="cards flex justify-around my-6 w-[24vw]">
          <div
            className={`card cursor-pointer ${
              selectedType === "fibonacci"
                ? "border-solid border-4 border-[#001eff]"
                : ""
            }`}
            onClick={() => setSelectedType("fibonacci")}
          >
            13
          </div>
          <div
            className={`card cursor-pointer ${
              selectedType === "shirt"
                ? "border-solid border-4 border-[#001eff]"
                : ""
            }`}
            onClick={() => setSelectedType("shirt")}
          >
            <Image width={80} height={80} src="/images/shirt.svg" alt="shirt" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-4 gap-4">
          <button
            className="block w-full px-6 py-3 min-w-[160px] text-lg font-medium cursor-pointer text-[#001eff] rounded shadow sm:w-auto hover:text-blue-400 transition-all active:text-blue-500 focus:outline-none focus:ring border border-solid border-[#001eff]"
            onClick={() => router.back()}
          >
            Back
          </button>
          <Link href={`/room/${createRandomNumber()}?type=${selectedType}`}>
            <a className="block w-full px-6 py-3 min-w-[160px] text-lg font-medium cursor-pointer text-white bg-blue-600 rounded shadow sm:w-auto active:bg-blue-500 transition-all hover:bg-blue-700 focus:outline-none focus:ring">
              Create Room
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
