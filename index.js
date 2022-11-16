function func1() {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);

  var x = 2;
  let y = 12;
}
func1();
// result
// 2
// 12
console.log(func1());
// result
// undefined
// 2
// 12