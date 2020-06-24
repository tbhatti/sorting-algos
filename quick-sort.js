partition = (array, low, high) => {
var pivot = array[high];
var i = low -1; 
for (var j = low; j <= high- 1; j++) {
 if(array[j] < pivot ) {
 	i++;
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
 }
}
let temp = array[i+1];
  array[i+1] = array[high];
  array[high] = temp;
return i+1;
}

quickSort = (arr, low, high) => {
    if (low < high)
    {
        /* pi is partitioning index, arr[pi] is now
           at right place */
        pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
   return arr;
}

let result = quickSort([500,10, 80, 30, 90, 40, 50, 70], 0, 7);
console.log('Here is result =', result);