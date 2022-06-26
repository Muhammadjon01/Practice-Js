let family={
    "-3" :["great grandfather",  "great grandmother"],
    "-2" :["grandfather",  "grandmother"],
    "-1" :["father",  "mother"],
    "0" :["me",  "me"],
    "1" :["son","Mother", "Fother", "daughter"],
    "2" :["grandson",  "granddaughter"],
    "3" :["great grandson",  "great granddaughter"],
    "4" :["Great", "grandMother", "granfother"]
}

function generation(x, f){
    return f=="m" || f=="M"?family[x][0]:family[x][1]
}

console.log(generation(3, "d"))