"use strict";

/**
 * 
 * While traveling, the spaceship endures quite a lot of stress.
 * As a result, an important part of the maintenance is to check the outer hull.
 * Stephan uses a digital durabilitimeter for this task.
 * The device scans a portion of the spaceships hull and gives a durability map
 * that is divided by small square fragments with measurements.
 * Sometimes Stephan does not have much time and he can patch only couple points,
 * so we need an algorithm to find the weak points.
 * 
 * The durability map is represented as a matrix with digits.
 * Each number is the durability measurement for the cell.
 * To find the weakest point we should find the weakest row and column.
 * The weakest point is placed in the intersection of these rows and columns.
 * Row (column) durability is a sum of cell durability in that row (column).
 * You should find coordinates of the weakest point (row and column).
 * The first row (column) is 0th row (column).
 * If a section has several equal weak points, then choose the top left point.
 * 
 * Input: A durability map as a list of lists with integers.
 * Output: The coordinates of the weak point as a list (tuple) of integers.
 * 
 * Example:
 * weakPoint([[7, 2, 7, 2, 8],
 *            [2, 9, 4, 1, 7],
 *            [3, 8, 6, 2, 4],
 *            [2, 5, 2, 9, 1],
 *            [6, 6, 5, 4, 5]]) == [3, 3]
 * weakPoint([[7, 2, 4, 2, 8],
 *            [2, 8, 1, 1, 7],
 *            [3, 8, 6, 2, 4],
 *            [2, 5, 2, 9, 1],
 *            [6, 6, 5, 4, 5]]) == [1, 2]
 */
const weakPoint = (matrix) => {
    const columnLength = matrix[0].length;
    const rowLength = matrix.length;

    return [
        getLowestColumnIndex(matrix, rowLength, columnLength),
        getLowestRowIndex(matrix, rowLength, columnLength)
    ];
}

const getLowestRowIndex = (matrix, rowLength, columnLength) => {
    let rowCounterMap = [];

    for (let i = 0; i < rowLength; i++) {
        rowCounterMap.push(0);
    }

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < columnLength; j++) {
            rowCounterMap[i] += matrix[j][i];
        }
    }

    let rowLowest = Number.MAX_SAFE_INTEGER;
    let rowLowestIndex = rowLength;

    for (let i = 0; i < rowLength; i++) {
        if (rowCounterMap[i] < rowLowest) {
            rowLowest = rowCounterMap[i];
            rowLowestIndex = i;
        }
    }

    return rowLowestIndex;
}

const getLowestColumnIndex = (matrix, rowLength, columnLength) => {
    let columnLowest = Number.MAX_SAFE_INTEGER;
    let columnLowestIndex = columnLength;

    for (let i = 0; i < rowLength; i++) {
        let countColumn = 0;
        for (let j = 0; j < columnLength; j++) {
            countColumn += matrix[i][j];
        }

        if (countColumn < columnLowest) {
            columnLowest = countColumn;
            columnLowestIndex = i;
        }
    }

    return columnLowestIndex;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([
        [7, 2, 7, 2, 8],
        [2, 9, 4, 1, 7],
        [3, 8, 6, 2, 4],
        [2, 5, 2, 9, 1],
        [6, 6, 5, 4, 5]
    ]), [3, 3], "Example");
    assert.deepEqual(weakPoint([
        [7, 2, 4, 2, 8],
        [2, 8, 1, 1, 7],
        [3, 8, 6, 2, 4],
        [2, 5, 2, 9, 1],
        [6, 6, 5, 4, 5]
    ]), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ]), [0, 0], "Top left");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}