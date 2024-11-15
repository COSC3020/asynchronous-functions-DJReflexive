import async from "async";


export function asnycCount(array, key) {
    let finalCount = 0;

    const numSubdivisions = 4;  // Hardcoded value that must match the number
                                // of functions in parallel([...])
    const subdivisionSize = array.length / numSubdivisions;
    let dividedArray = [];

    // Divides the array into smaller arrays
    for (let i = 0; i < array.length/subdivisionSize; i++) {
        let subArray = array.slice(i*subdivisionSize, (i+1)*subdivisionSize);
        dividedArray.push(subArray);
    }

    // Async function calls
    async.parallel([
        function(callback) { callback(0, count(dividedArray[0], key)); },
        function(callback) { callback(0, count(dividedArray[1], key)); },
        function(callback) { callback(0, count(dividedArray[2], key)); },
        function(callback) { callback(0, count(dividedArray[3], key)); }
    ], function(err, results) { // never used err
        for (let r in results) {
            finalCount += results[r];
        }
    });

    return finalCount;
}


export function count(array, key) {
    let count = 0;
    
    for (let elem in array) {
        if (array[elem] == key) {
            count++;
        }
    }
    
    return count;
}
