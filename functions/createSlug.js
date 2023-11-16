module.exports = function (title, array) {
  if (typeof title !== "string") {
    throw new Error("title is not a string!");
  }
  return title.toLowerCase().replace(/\s+/g, "-");
};
