export const createArray = (number) => {
  const arr = [];
  for (let index = 1; index <= number; index++) {
    arr.push(index);
  }
  return arr;
}