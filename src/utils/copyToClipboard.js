const copyToClipboard = (text) => {
  return navigator.clipboard.writeText(
    "https://homepokerapp.herokuapp.com/room/" + text
  );
};

export default copyToClipboard;
