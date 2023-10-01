function solve(input) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++){
            if(i == j) {
                mainDiagonal += Number(input[i][j]);
            }
            if ((i + j) == (input[i].length - 1))
            secondaryDiagonal += Number(input[i][j]);
        }
    }
    console.log(mainDiagonal + ' ' + secondaryDiagonal);
}

solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);