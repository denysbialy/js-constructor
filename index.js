function createMultiplicationTable(num1, num2) {
  let table = {};

  for (let i = 1; i < num1; i++) {
    for (let y = 1; y <= num2; y++) {
      table[`${i} * ${y}  =`] = i * y;
    }
  }
  return table;
}
