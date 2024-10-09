import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { toast } from "react-toastify";
import io from "socket.io-client";

import { getName } from "../../utils/username";
import Room from "../../common/components/elements/room";
import Loader from "../../common/components/ui/Loader";

let socket;

export default function RoomPage() {
  const router = useRouter();
  const [roomInfo, setRoomInfo] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;

    const name = getName();
    const room = router.query.room;
    const type = router.query.type;

    if (typeof window !== "undefined") {
      localStorage.openpages = Date.now();
      var onLocalStorageEvent = function (e) {
        if (e.key === "openpages") {
          localStorage.page_available = Date.now();
        }
        if (e.key === "page_available") {
          window.location.assign("/error");
        }
      };
      window.addEventListener("storage", onLocalStorageEvent, false);

      if (!name) {
        window.location.assign(`/name?room=${room}`);
        return;
      }
    }

    socketInitializer(name, room, type);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", onLocalStorageEvent);
      }
    };
  }, [router.isReady, router.query.room, router.query.type]);

  const socketInitializer = async (name, room, type) => {
    await fetch("/api/socket");

    socket = io();

    socket.emit("join-room", {
      room,
      name,
      type,
    });

    socket.on("user-connected", (value) => {
      toast.info(`User ${value.username} joined room ${value.room}`, {
        autoClose: 3000,
      });
      setRoomInfo(value.roomData);
    });

    socket.on("sync-votes", (value) => {
      setRoomInfo(value.roomData);
    });

    socket.on("user-disconnected", (value) => {
      toast.error(`User ${value.username} left room ${value.room}`, {
        autoClose: 3000,
      });
      setRoomInfo(value.roomData);
    });
  };

  let clickOnVote = (value) => {
    socket.emit("user-vote", {
      vote: value,
    });
  };

  const toggleVoteShow = () => {
    socket.emit("toggle-votes-visibility", !roomInfo.isVotesHidden);
  };

  const resetRoom = () => {
    socket.emit("reset-room", "reset-room");
  };

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <title>
          {(router.query.room && `Room ${router.query.room}`) || "Loading"}
        </title>
      </Head>
      <div className="min-w-fit h-screen p-8 bg-gradient-to-l from-blue-600 to-blue-900">
        {roomInfo ? (
          <Room
            roomId={router.query.room}
            roomSocketInfo={roomInfo}
            clickOnVoteCard={clickOnVote}
            toggleVoteShow={toggleVoteShow}
            resetRoom={resetRoom}
          />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
