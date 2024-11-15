import { asnycCount, count } from "./code.js";
import jsc from 'jsverify';



function generateRandomArray(size, lowRange, highRange) {
    let newArray = [];

    for (let i = 0; i < size; i++) {
        newArray.push(jsc.random(lowRange, highRange));
    }

    return newArray;
}


    /* Generate random examples tests */

const maxNumTests = 5000000;
const maxArraySize = 100;
const lowRange = -20;
const highRange = 20;

for (let testCounter = 0; testCounter < maxNumTests; testCounter++) {
    const currentArraySize = jsc.random(0, maxArraySize); // Chooses Random Size of Array

    const array = generateRandomArray(currentArraySize, lowRange, highRange); // Random Array
    const key = jsc.random(lowRange, highRange); // Random Key

    const synchronous = count(array, key);
    const asynchronous = asnycCount(array, key);

    console.assert(synchronous == asynchronous, "Test Failed...");

    if (synchronous != asynchronous) {
        throw "Test Failed...";
    }
}