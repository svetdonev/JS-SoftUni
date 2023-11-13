function sort(array, criteria) {
    if (criteria === 'asc') {
        array.sort((a, b) => a - b);
    } else if (criteria === 'desc') {
        array.sort((a, b) => b - a);
    }

    return array;
}

sort([14, 7, 17, 6, 8], 'asc');
sort([14, 7, 17, 6, 8], 'desc');