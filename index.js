const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

//since let has block scope, so it is fetch one by one
// result 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//since var has global/local scope, so it is increment first and then check. that is why i = 10 and b's 10 th index is undefined
//result
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined