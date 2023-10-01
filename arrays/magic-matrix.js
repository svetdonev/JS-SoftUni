function isMagicMatrix(matrix) {
    for(let i = 0; i < matrix[0].length; i++) {
        let currentRow = matrix[i].reduce((acc, x) => {
            return acc + x;
        }, 0);
        
        let currentCol = 0;
        for(let j = 0; j < matrix.length; j++){
            currentCol += matrix[j][i];
        }

        if(currentRow !== currentCol) {
            return false;
        }
    }
    return true;
}

isMagicMatrix([[4, 5, 6], 
               [6, 5, 4], 
               [5, 5, 5]]);