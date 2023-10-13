function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
    function onClick() {
       let rowElements = document.querySelectorAll('tbody tr');
        let searchFieldElement = document.getElementById('searchField').value.toLowerCase();

        for(let i = 0; i < rowElements.length; i++) {
            rowElements[i].classList.remove('select');
            if(rowElements[i].textContent.toLowerCase().includes(searchFieldElement)) {
                rowElements[i].classList.add('select');
            }
        }
    }
 }