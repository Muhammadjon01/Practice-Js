function f(str=""){
    return function (){
        return str
    }
}

let f2=f("Apple")
console.log(f2())