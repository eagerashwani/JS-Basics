const fs = require("fs");
// let buffer = fs.readFileSync('./example.json') // Reading the JSON File

// //console.log(buffer)

// let data = JSON.parse(buffer) // coverts the buffer data into JSON format

//console.log(data)

let data2 = require("./example.json");

data2.push({
  name: "Bruce",
  "last name": "Bannner",
  isAvenger: true,
  Age: 10000,
  friends: ["Bruce", "Tony", "Peter"],
  address: {
    planet: "Asgard",
  },
});

console.log(data2);

let stringData = JSON.stringify(data2);

console.log(stringData);

fs.writeFileSync("./example.json", stringData);




let newWB = xlsx.utils.book_new();
let newWS = xlsx.utils.json_to_sheet(data2);
xlsx.utils.book_append_sheet(newWB, newWS,"Avengers");
xlsx.writeFile(newWB,"MY XLSX");


let wb = xlsx.readFile(filePath);
    let excelData = wb.Sheets[sheetName];
    let ans = xlsx.utils.sheet_to_json(excelData);
    console.log(ans)
