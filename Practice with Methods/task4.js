let str = "One two three four"
let newStr=""

for(let i=str.length-1; i>=0; i--){
    newStr+=str.charAt(i)
}

console.log(newStr)