const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (()=>{
        console.log(this.name);
        console.log(self.name);
      })();
    }
  }
  b.f();

  //result
//"Vivek"
// undefined
// "Vivek" 
  //Only in the IIFE inside the function f, this keyword refers to the global/window object