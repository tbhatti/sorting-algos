// eg [1,2,3] ->[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permutation(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i = i + 1) {
        let remaining = permutation(arr.slice(0, i).concat(arr.slice(i + 1)));
        if (!remaining.length) {
            result.push([arr[i]])
        } else {
            for (let j = 0; j < remaining.length; j = j + 1) {
                result.push([arr[i]].concat(remaining[j]))
            }
        }
    }
    return result;
}
console.log(permutation([1,2,3]))