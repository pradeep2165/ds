function isAnagram(one, two){
    let a = one.toLowerCase().split("").sort().join("");
    let b = two.toLowerCase().split("").sort().join("");
    return a===b;
}
console.log(isAnagram('pradeep', 'eepdarp'));

//anagram program
