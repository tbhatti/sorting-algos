
// eg (10 , [2,3,4,6,5,7]) -> [2,4,4] or [3,7]
function makeChange(target, changes) {
    changes = changes.sort(function(a, b) { // Just to sort changes array
        return a - b;
    });
    let uniqueCombinations = [];
    let i, j, k;
    let len = changes.length;
    for (i = 0; i < len; i++) {
        /** The continue statement to skip one iteration in the loop. 
        So, if 2 successive elements are same then skip it and move to next one **/
        if (i > 0 && changes[i] === changes[i - 1]) continue;
        for (j = i + 1; j < len; j++) { // Loop for 2 numbers combination
            if (j > i + 1 && changes[j] === changes[j - 1]) continue;
            if (changes[i] + changes[j] === target)
                //Push 2 numbers combination into array
                uniqueCombinations.push([changes[i], changes[j]])
            for (k = j + 1; k < len; k++) { // Loop for 3 numbers combination
                if (k > j + 1 && changes[k] === changes[k - 1]) continue;
                if (changes[i] + changes[j] + changes[k] === target)
                    //Push 3 numbers combination into array
                    uniqueCombinations.push([changes[i], changes[j], changes[k]]);
            }
        }
    }
    return uniqueCombinations;
}


console.log(makeChange(10 , [2,3,4,4,5,7]))