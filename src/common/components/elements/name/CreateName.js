import React from "react";
import { getName, saveName } from "../../../../utils/username";

export default function CreateName() {
  const handleNameSave = (e) => {
    if (e.target.value) {
      saveName(e.target.value);
    }
  };

  return (
    <>
      <h1 className="text-3xl text-center my-3 font-extralight">
        Enter story Name
      </h1>
      <input
        className="relative block px-3 py-2 border-2 border-gray-200 rounded-lg w-full text-lg focus:ring-0"
        id="name"
        onBlur={handleNameSave}
        type="text"
        placeholder="story name"
        defaultValue={getName() || ""}
      />
    </>
  );
}
