function randfunc(){
    for(var i = 0; i< 2; i++){
        (function(i){
            setTimeout(() => {
                console.log(i)
            }, 1000);
        })(i)
    }
}

randfunc();