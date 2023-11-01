function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
 
    function onClick () {
       let informationElement = document.getElementsByTagName('textarea')[0].value;
       console.log(informationElement);
       
    }
 }

 //["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]