const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Step 1: Split the CSV string into rows
let rows = csv.split("\n");

// Step 2: Split the first row into headers and convert them to lowercase
let headers = rows[0].split(",").map(header => header.toLowerCase());

// Step 3: Initialize an array to hold the result objects
let result = [];

// Step 4: Loop through each row (starting from index 1 to skip headers)
for (let i = 1; i < rows.length; i++) {
    // Split the current row into values
    let values = rows[i].split(",");
    
    // Create an object for the current row
    let obj = {};
    
    // Step 5: Assign each value to the corresponding header key in the object
    for (let j = 0; j < values.length; j++) {
        obj[headers[j]] = values[j];
    }
    
    // Add the object to the result array
    result.push(obj);
}

// Log the result to see the output
console.log(result);