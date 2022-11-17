 function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let numberToIndex = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > numberToIndex){
            arr[j+1] = arr[j];
            j = j-1;
            
        }
        arr[j+1] = numberToIndex
        
    }
}

const arr = [8, 20, -2, 4, -6]
insertionSort(arr);
console.log(arr);

// [8, 20, -2,4, -6]
// [8, 20, -2, 4, -6]
// [8, 20, 20, 4,  -6]
// [8, 8, 20, 4, -6]
// [-2, 8, 20, 4, -6]
// [-2, 8, 20, 20, -6]
// [-2, 8, 8, 20, -6]
// [-2, 4, 8, 20, -6]
// [-2, 4, 8, 20, 20]
// [-2, 4, 8, 8, 20]
// [-2, 4, 4, 8, 20]
// [-2, -2, 4, 8, 20]
// [-6, -2, 4, 8, 20]

//insertionSort algo