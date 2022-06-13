function f(a,b){
    var cnt=1;
    var sum=0
    for(let i=a; i<=b; i++){
        cnt=i*i;
        sum=sum+cnt;
    }

    console.log(sum)
}

f(2,4)