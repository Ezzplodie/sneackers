const fibonachi = (quntities) => {
  if (quntities === 0) {
    return 0;
  }
  const myArray = [];
  const fibonachiArray = (array) => {
    let newNumber = array[array.length - 1] + array[array.length - 2];
    array.push(newNumber);
    return array;
  };
  for (let i = 0; i < quntities; i++) {
    if (i === 0 || i === 1) {
      myArray.push(1);
    } else {
      fibonachiArray(myArray);
    }
  }
  return myArray;
};
console.log(fibonachi(20)); // Повинно вивести: [0, 1, 1, 2, 3]
