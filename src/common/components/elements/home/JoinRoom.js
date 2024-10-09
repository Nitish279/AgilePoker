import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import useSelectedStore from "../../../store/selected";
import CreateName from "../name/CreateName";
import { getName } from "../../../../utils/username";

export default function JoinRoom() {
  const router = useRouter();
  const [code, setCode] = useState([]);
  const fields = useRef(null);
  const selectDefault = useSelectedStore((state) => state.selectDefault);

  useEffect(() => {
    if (fields.current) {
      const inputs = fields.current.querySelectorAll("input");

      const handleKeyDown = (el) => {
        if (el.key === "Backspace" || el.key === "Delete") {
          if (el.target.value.length === 1) {
            el.target.value = "";
          } else {
            el.target.previousElementSibling &&
              el.target.previousElementSibling.focus();
          }
        }
        if (el.target.value.length === 1 && el.target.nextElementSibling) {
          el.target.nextElementSibling.focus();
        }
      };

      const handleKeyUp = (el) => {
        const newCode = [...code];
        if (el.key === "Backspace" || el.key === "Delete") {
          newCode.pop();
        } else if (/^[0-9]$/.test(el.key)) {
          newCode.push(el.key);
        }
        setCode(newCode);

        if (newCode.length === 5) {
          router.push("/room/" + newCode.join(""));
        }
      };

      inputs.forEach((input) => {
        input.addEventListener("keydown", handleKeyDown, { passive: false });
        input.addEventListener("keyup", handleKeyUp, { passive: false });
      });

      return () => {
        inputs.forEach((input) => {
          input.removeEventListener("keydown", handleKeyDown);
          input.removeEventListener("keyup", handleKeyUp);
        });
      };
    }
  }, [code, router]);

  return (
    <div>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center absolute top-20 left-20"
        onClick={() => router.back()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-bar-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
        <span>Back</span>
      </button>

      {typeof window !== "undefined" && !getName() && <CreateName />}

      <h1 className="text-center text-2xl my-8">Enter the room code:</h1>
      <div>
        <form>
          <fieldset ref={fields} className="codefield">
            {Array.from({ length: 5 }).map((_, index) => (
              <input
                key={index}
                autoComplete="off"
                type="text"
                inputMode="numeric"
                pattern="\d*"
                maxLength="1"
                defaultValue=""
              />
            ))}
          </fieldset>
        </form>
      </div>
    </div>
  );
}
