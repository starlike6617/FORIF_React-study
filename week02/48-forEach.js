const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

arr.forEach(function (elm) {
  console.log(elm);
});

arr.forEach((elm) => console.log(elm));
