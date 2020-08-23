function linearSearch(num) {
  let arr = [1,19,5,11,22,55];
  let result = "";
  for(let i=0;i<arr.length;i++){
         if(arr[i]=== num){
            result = 'Element found at : '+i;
            break;
         }
      }
      return result;
}

console.log(linearSearch(22))