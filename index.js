function summation(n){
    let sum = 0;
    for(let i= 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(summation(6));

//1,2,3,4,5,6 = 21