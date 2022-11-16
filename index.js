var x = 23;

(function(){
  var x = 43;
  (function random(){
    // x is hoisted
    x++; // x is not a number since it is not initialized yet
    console.log(x); // NaN
    var x = 21; // Initialization of x
  })();
})(); 

// retult 
// NaN
//random() function has functional scope since x is declared and hoisted in the functional scope.