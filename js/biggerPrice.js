"use strict";

/**
 * You have a table with all available goods in the store.
 * The data is represented as a list of objects
 * Your mission here is to find the TOP most expensive goods.
 * The amount we are looking for will be given as a first argument
 * and the whole data as the second one.
 * 
 * Input: Integer and array of objects. Each objects has two attributes "name" and "price"
 * Output: the same as the second Input argument.
 * 
 * Example:
 * biggerPrice(2, [
 * {"name": "bread", "price": 100},
 * {"name": "wine", "price": 138},
 * {"name": "meat", "price": 15},
 * {"name": "water", "price": 1}
 * ]) == [
 * {"name": "wine", "price": 138},
 * {"name": "bread", "price": 100}
 * ]
 * 
 * biggerPrice(1, [
 * {"name": "pen", "price": 5},
 * {"name": "whiteboard", "price": 170}
 * ]) == [{"name": "whiteboard", "price": 170}]
 */
const biggerPrice = (limit, data) => {
    // TOP most expensive goods
    // your code here
    let result = [];
    let excludeIndexes = [];

    for (let i = 0, dataLength = data.length; i < dataLength; i++) {
        const maxIndex = getMaxIndex(data, excludeIndexes);
        result.push(data[maxIndex]);

        if (result.length === limit) {
            break;
        } else {
            excludeIndexes.push(maxIndex);
        }
    }

    return result;
}

const getMaxIndex = (data, excludeIndexes) => {
    let maxIndex = 0;
    let maxPrice = 0;

    for (let i = 0, dataLength = data.length; i < dataLength; i++) {
        if (excludeIndexes.includes(i)) {
            continue;
        }

        const dataMap = data[i];
        if (dataMap['price'] >= maxPrice) {
            maxIndex = i;
            maxPrice = dataMap['price'];
        }
    }

    return maxIndex;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(biggerPrice(2, [
        { "name": "bread", "price": 100 },
        { "name": "wine", "price": 138 },
        { "name": "meat", "price": 15 },
        { "name": "water", "price": 1 }
    ]))

    assert.deepEqual(biggerPrice(2, [
        { "name": "bread", "price": 100 },
        { "name": "wine", "price": 138 },
        { "name": "meat", "price": 15 },
        { "name": "water", "price": 1 }
    ]), [
        { "name": "wine", "price": 138 },
        { "name": "bread", "price": 100 }
    ])
    assert.deepEqual(biggerPrice(1, [
        { "name": "pen", "price": 5 },
        { "name": "whiteboard", "price": 170 }
    ]), [{ "name": "whiteboard", "price": 170 }])
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}