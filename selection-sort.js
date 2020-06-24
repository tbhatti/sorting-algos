function selectionSort(arr, arrayLength) {
  if (arrayLength === 0) {
    return arr;
  }
  //It will only run to the value of arrayLength, because it is decremneting at each iteration
  const min = Math.min(...arr.filter((element, index) => index < arrayLength));
  
  //Find index of the smallest element
  const index = arr.findIndex(x => x === min);
  //Remove array item at index
  arr.splice(index, 1);
  arr.push(min);
  return selectionSort(arr, --arrayLength);
}

const unsortedArr = [433,5, 34, 5, 1, 6, 7, 9, 2, 100];
console.log('result', selectionSort(unsortedArr , unsortedArr.length))