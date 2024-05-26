const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let cell1 = ""
let cell2 = ""
let cell3 = ""
let cell4 = ""

let currentCell = 0

// Loop through the characters of the csv string
for (let char of csv) {
    // store each cell of data in a variable
    cellData = char
    if (cellData === ",") {
        currentCell++
    }
    else if (cellData === "\n") {
        console.log(cell1, cell2, cell3, cell4)
        
        // Reset cells for next row
        cell1 = ""
        cell2 = ""
        cell3 = ""
        cell4 = ""
        // Resent current cell for new row
        currentCell = 0
    }
    // The rest of the characters will be stored in the current cell's data
    else {
        if (currentCell === 0) cell1 += char
        else if (currentCell === 1) cell2 += char
        else if (currentCell === 2) cell3 += char
        else if (currentCell === 3) cell4 += char
    }
}
console.log(cell1, cell2, cell3, cell4)
