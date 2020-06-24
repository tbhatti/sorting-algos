function merge(arr){
//console.log('Calling Merg');
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = merge( arr.slice(0, mid));
  let right = merge(arr.slice(mid))
   return mergeSort(left,right)
      function mergeSort(arr1, arr2) {
        let result = [];
        let i=0;
        let j=0;
        while(i< arr1.length && j < arr2.length) {
          if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++;
          } else {
            result.push(arr2[j])
            j++;
          }
        }
       while(i < arr1.length) {
          result.push(arr1[i])
          i++;
       }
       while(j < arr2.length){
          result.push(arr2[j])
          j++;
       }    
        return result
    }
 
}

console.log(merge([111,400,3,6,2,11,100,44]))