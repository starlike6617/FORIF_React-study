const arr = [
  { color: "red" },
  { color: "blue" },
  { color: "green" },
  { color: "yellow" },
];

console.log(
  arr.findIndex((elm) => {
    return elm.color === "green";
  })
);
