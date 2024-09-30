import React from "react";
import useSelectedStore from "../../../store/selected";

export default function Welcome() {
  const { selectCreate, selectJoin, selectDefault } = useSelectedStore(
    (state) => state
  );

  return (
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-4xl font-bold logo">LSEG Agile Planning Poker</h1>

      <p className="mt-4 sm:leading-relaxed sm:text-xl">
        Collaborate, estimate, and plan effortlessly!
      </p>

      <div className="flex flex-wrap justify-center mt-8 gap-4">
        <a
          className="block w-full px-12 py-3 text-lg font-medium text-white bg-blue-600 rounded shadow sm:w-auto active:bg-blue-500 transition-all hover:bg-blue-700 focus:outline-none focus:ring cursor-pointer"
          onClick={selectCreate}
        >
          Create Room
        </a>

        <a
          className="block w-full px-12 py-3 text-lg font-medium text-blue-600 rounded shadow sm:w-auto hover:text-blue-400 transition-all active:text-blue-500 focus:outline-none focus:ring cursor-pointer"
          onClick={selectJoin}
        >
          Join a Room
        </a>
      </div>
    </div>
  );
}
