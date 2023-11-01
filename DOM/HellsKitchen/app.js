function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
 
    function onClick () {
       let input = JSON.parse(document.querySelector('#inputs textarea').value);
       let avgSalary = 0;
       let totalSalary = 0;
       let currentAvgSalary = 0;
       let bestName = '';
       let output = {};

       for (const line of input) {
            let restaurantInfo = line.split(' - ');
            let restaurantName = restaurantInfo.shift();
            let workersData = restaurantInfo[0].split(', ');

            for (const worker of workersData) {
                let [name, salary] = worker.split(' ');
                
                if(!output.hasOwnProperty(restaurantName)) {
                    output[restaurantName] = {};
                } else {
                    output[restaurantName][name] = Number(salary);
                }

            }
       }
       console.log(output);
    }
 }

 //["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]