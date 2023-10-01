function sort(input) {
    input.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(input.join('\n'));
}

sort(['alpha', 'beta', 'gamma']);
sort(['Isaac', 'Theodor', 'Jack', 'Harrison', 'George']);
sort(['test', 'Deny', 'omen', 'Default']);