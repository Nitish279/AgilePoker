import React from "react";
import { useRouter } from "next/router";
import useSelectedStore from "../../../store/selected";

export default function Welcome() {
  const { selectCreate, selectJoin, selectDefault } = useSelectedStore(
    (state) => state
  );

  const router = useRouter();

  const handleCreateRoom = () => {
    router.push("/create-room"); // Navigate to CreateRoom page
  };

  const handleJoinRoom = () => {
    router.push("/join-room"); // Navigate to JoinRoom page
  };

  return (
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-4xl font-bold logo">LSEG Agile Planning Poker</h1>

      <p className="mt-4 sm:leading-relaxed sm:text-xl">
        Collaborate, estimate, and plan effortlessly!
      </p>

      <div className="flex flex-wrap justify-center mt-8 gap-4">
        <a
          className="block w-full px-12 py-3 text-lg font-medium text-white bg-blue-600 rounded shadow sm:w-auto active:bg-blue-500 transition-all hover:bg-blue-700 focus:outline-none focus:ring cursor-pointer"
          // onClick={selectCreate}
          onClick={handleCreateRoom}
        >
          Create Room
        </a>

        <a
          className="block w-full px-12 py-3 text-lg font-medium text-blue-600 rounded shadow sm:w-auto hover:text-blue-400 transition-all active:text-blue-500 focus:outline-none focus:ring cursor-pointer"
          // onClick={selectJoin}
          onClick={handleJoinRoom}
        >
          Join a Room
        </a>
      </div>
    </div>
  );
}
