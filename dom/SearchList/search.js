function search() {
    let towns = document.querySelectorAll('#towns li');
    let searchText = document.getElementById('searchText').value.toLowerCase();

    let counter = 0;
    for(let i = 0; i < towns.length; i++) {
        let currentTown = towns[i].textContent.toLowerCase();

        if(currentTown.includes(searchText)) {
            counter++;
            towns[i].style.textDecoration = 'underline';
            towns[i].style.fontWeight = 'bold';
        } else {
            towns[i].style.textDecoration = 'none';
            towns[i].style.fontWeight = 'normal';
        }
    }

    let result = document.getElementById('result');
    result.textContent = `${counter} matches found`;
 }
 