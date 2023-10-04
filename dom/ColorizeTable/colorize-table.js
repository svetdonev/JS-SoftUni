function colorize() {
    let rowElements = document.querySelectorAll('tr');
    let counter = 1;

    for (const el of rowElements) {
        if(counter % 2 == 0) {
            el.style.backgroundColor = 'teal';
        }

        counter++;
    }
}