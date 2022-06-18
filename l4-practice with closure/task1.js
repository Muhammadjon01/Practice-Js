function f(x){
    return function (y){
        return y+x;
    }
}

console.log(f(-30)(80))