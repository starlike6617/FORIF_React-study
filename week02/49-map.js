// const arr = [1, 2, 3, 4];
// const newArr = [];

// arr.forEach(function (elm) {
//   newArr.push(elm * 2);
// });

// console.log(newArr);

const arr = [1, 2, 3, 4];

const newArr = arr.map((elm) => {
  return elm * 2;
});

console.log(newArr);
