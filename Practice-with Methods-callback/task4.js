let arr = [1,2,3,4,5, true]
let sum=0
let arr1=arr.filter((elem)=>{
  if(typeof(elem)==="number") {
    sum+=elem
  } 
})

console.log(sum)