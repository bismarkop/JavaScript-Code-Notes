const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"


//This splits the csv into an array with multiple strings wherever there's a break (\n). Each of the splits in this csv represent rows.
let csvArr = csv.split("\n")
// console.log(csvArr) // This is an array with 5 rows of strings
/* [
    'ID,Name,Occupation,Age',
    '42,Bruce,Knight,41',
    '57,Bob,Fry Cook,19',
    '63,Blaine,Quiz Master,58',
    '98,Bill,Doctor’s Assistant,26'
  ] */
// console.log(csvArr.length) = 5

// This will give us 5 rows of data within the array, each row separated by commas and each of the first row representing the header of columns. We can now access the data in each index. For example, to get the first row, let's first put it in a variable and log it:

let firstRow = csvArr[0] // header of columns
// console.log(firstRow) // ID,Name,Occupation,Age (a string)

// We can access each row in a similar way with the different indices. Next, we want to iterate through each line of data and display the csv header as the column along with their respected values in table format.

// Iterate through each row/line
// for (let i=0; i<csvArr.length; i++) {
//     console.log(csvArr[i])
// }
// The iteration above produces the lines below. These are 5 rows of strings

/*
 ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26
*/

// Insert headers as keys and the row data as values in an array object
let arrObj = [] 

// Split the header into an array using commas
let headers = firstRow.split(",")
// console.log(headers) // [ 'ID', 'Name', 'Occupation', 'Age' ]

// Iterate through the remaining rows and not the header row (this is why we started from i=1 this time.)
for (let i=1; i<csvArr.length; i++) {
    let rowData = csvArr[i].split(",")
    arrObj[i] = {}

    for (let j=0; j<rowData.length; j++) {
        // console.log(`${headers[j]} : ${rowData[j]}`)
        arrObj[i][headers[j]] = rowData[j]
    }
}
console.log(arrObj)