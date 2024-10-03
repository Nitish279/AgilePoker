export const saveName = (name) => window.localStorage.setItem("username", name);
// export const getName = () => window.localStorage.getItem("username");

export const getName = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("username");
  }
  return null; // Or provide a default value
};
