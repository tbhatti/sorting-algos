function insertionSort(arrayOfNumbers) {
  var j, key, i, length

  for (j = 1, length = arrayOfNumbers.length; j < length; j++) {
    key = arrayOfNumbers[j]
    i = j - 1
    while (i >= 0 && arrayOfNumbers[i] > key){
      arrayOfNumbers[i + 1] = arrayOfNumbers[i];
      i = i - 1
    } 
    arrayOfNumbers[i + 1] = key
  }

  return arrayOfNumbers
}

var result = insertionSort([2, 1, 5, 8, 9]);
console.log(result);