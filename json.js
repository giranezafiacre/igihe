// Requiring fs module
const fs = require("fs");
  
// Storing the JSON format data in myObject
var data = fs.readFileSync("data.json");
var myObject;
if(!data) myObject = [];
else myObject = JSON.parse(data)

  
// Defining new data to be added
let newData = {
  country: "England",
};
  
// Adding the new data to our object
myObject.push(newData);
  
// Writing to our JSON file
var newData2 = JSON.stringify(myObject);
fs.writeFile("data2.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log("New data added");
});