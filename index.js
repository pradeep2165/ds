// What is the purpose of the following JavaScript code?
var scope = "global scope"
function check(){
    // var scope = "local scope";
    function f(){
        return scope
    }
    return f;
}

console.log(check()) //local scope