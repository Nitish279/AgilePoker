export const saveName = (name) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("username", name);
  }
};

export const getName = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("username");
  }
  return null;
};
