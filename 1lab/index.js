const Utils = require("./Utils");
const Sorts = require("./Sorts");

function compareWithNativeSort(matrix, sort) {
  console.log("Initial matrix: ", matrix);
  const start = Date.now();
  const sortedMatrix = sort(matrix);
  const end = Date.now();
  
  const startNative = Date.now();
  Sorts.nativeSort(matrix);
  const endNative = Date.now();

  console.log("Sorted matrix: ", sortedMatrix);
  console.log(`User's sort: ${end - start} ms`);
  console.log(`Native sort: ${endNative - startNative} ms`);
}


const matrix = Utils.generateMatrix();

    // console.log("\n<--- Selection sort --->");
    // compareWithNativeSort(matrix, Sorts.selectionSort);
    // console.log("\n<--- Insertion sort --->");
    // compareWithNativeSort(matrix, Sorts.insertionSort);
    // console.log("\n<--- Bubble sort --->");
    // compareWithNativeSort(matrix, Sorts.bubbleSort);
    // console.log("\n<--- Shell sort --->");
    // compareWithNativeSort(matrix, Sorts.shellSort);
    console.log("\n<--- Quick sort --->");
    compareWithNativeSort(matrix, Sorts.quickSort);
    // console.log("\n<--- Heap sort --->");
    // compareWithNativeSort(matrix, Sorts.heapSort);