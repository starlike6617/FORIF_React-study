const arr = [
  { color: "red" },
  { color: "blue" },
  { color: "green" },
  { color: "yellow" },
];

const element = arr.find((elm) => {
  return elm.color === "green";
});

console.log(element);
