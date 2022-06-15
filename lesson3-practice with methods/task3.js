let str = "aABaBCAbC"
let str1= "ABCDEFJHIGKLMNOPQRSTUVWXYZ"
let str2=""
cnt=0
for(let i=0; i<str.length; i++){
    if(str1.includes(str[i])){
        str2+=str.charAt(i)
        cnt++
    }
}

console.log(str2)
console.log(cnt)