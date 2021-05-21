module.exports = {
    generateMatrix(
      m = 50, 
      n = 50, 
      minLimit = -250, 
      maxLimit = 1010
    ) {
      const matrix = new Array(m);
    
      for (let i = 0; i < matrix.length; i++) {
        matrix[i] = [];
    
        for (let j = 0; j < n; j++) {
          matrix[i][j] = minLimit + Math.floor(Math.random() * (maxLimit - minLimit + 1));
        }
      }
    
      return matrix;
    },
  
    flattenMatrix(matrix) {
      return matrix.reduce((flatArray, row) => [...flatArray, ...row], []);
    },
  
    getMatrixFromArray(array, m, n) {
      const matrix = new Array(m);
  
      for (let i = 0; i < matrix.length; i++) {
        matrix[i] = array.slice(i * m, (i + 1) * n);
      }
  
      return matrix;
    },
  
    swap(array, first, second) {
      [array[first], array[second]] = [array[second], array[first]];
    }
  } 