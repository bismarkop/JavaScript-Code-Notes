let array = [[1, 2], [3, 4], [5, 6, 7]];

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]); 
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
            //console.log(arr[i][j]);
            // multiplyThis = arr[i][j];
            
        }
    }
    console.log(product);
    return product
}

multiplyAll(array)