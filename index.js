function linearSearch(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==target)return i
    }
    return -1;
}

console.log(linearSearch([8,3,2,4,5,6], 6));

//linear search algo