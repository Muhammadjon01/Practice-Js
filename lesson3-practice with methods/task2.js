let str = "aaabbcceggegga";
let str1 = "";
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(i+1)) {
        str1 += str.charAt(i);
    }
}

for(let j=0; j<str.length; j++){
    if(!str1.includes(str[j])){
        console.log(str.charAt(j))
        break;
    }
}
