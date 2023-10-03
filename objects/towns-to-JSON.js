function solve(input) {
    const columnNamesRow = input[0].trim();
    const columnNames = columnNamesRow.split('|').map(item => item.trim()).filter(item => item !== '');
  
    const jsonObjects = [];
  
    for (let i = 1; i < input.length; i++) {
      const rowData = input[i].trim();
      const rowValues = rowData.split('|').map(item => item.trim()).filter(item => item !== '');
  
      const jsonObject = {};
      
      for (let j = 0; j < columnNames.length; j++) {
        if (columnNames[j] === "Latitude" || columnNames[j] === "Longitude") {
          jsonObject[columnNames[j]] = parseFloat(rowValues[j]).toFixed(2) * 1;
        } else {
          jsonObject[columnNames[j]] = rowValues[j];
        }
      }
      
      jsonObjects.push(jsonObject);
    }
  
    const jsonString = JSON.stringify(jsonObjects);
    console.log(jsonString);
}
  
  const input = [
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
  ];
  
solve(input);
  