function fibonacci() {
  var fbnci = [0, 1], max = 400, index = 1, next;
do {
  index++;
  next = fbnci[index-2] + fbnci[index-1];
  if (next <= max) {
      console.log(next);
      fbnci[index] = next;
  }
} while(next < max);
}

console.log(fibonacci())