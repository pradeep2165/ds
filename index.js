function bigFunc(element){
    let newArray = new Array(700).fill('♥');
    return newArray[element]
  }
  
  console.log(bigFunc(599)); // Array is created
  console.log(bigFunc(670)); // Array is created again

//   result
//   ♥ ////it is from 599 index
//   ♥ //it is from 670 index


// This code can be modified by using closures,
function biggFunc(){
    let newArray = new Array(700).fill('♥');
    return (element) => newArray[element];
  }
  
  let getElement = biggFunc(); // Array is created only once
  console.log(getElement(599));
  console.log(getElement(670)); 