let str = "aABaBCAbC"
let cnt=0;
for(let i=0; i<str.length; i++){
    if(str[i]==str[i].toUpperCase()){
        cnt++
    }
}

console.log(cnt)