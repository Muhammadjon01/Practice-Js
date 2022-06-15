let str = "bEEFGBuFBRrHgUHlNFYaYr"
let newStr=""

for(let i=0; i<str.length; i++){
    if(str.charAt(i)==str.charAt(i).toLowerCase()){
        newStr+=str.charAt(i)
    }
}

console.log(newStr)