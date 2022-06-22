function addElem(arr) {
  arr.splice(3, 0, "a", "b", "c");

  return arr;
}

console.log(addElem([1, 2, 3, 4, 5]));