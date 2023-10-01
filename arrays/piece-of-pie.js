function solve(input, start, end) {
    let startIndex = Number(input.indexOf(start));
    let endIndex = Number(input.indexOf(end));
    let result = input.slice(startIndex, endIndex + 1);

    return result;
}

solve(
    ['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);