var decrementNUm = (function () {
  counter = 0;
  function changeNum(val) {
    counter += val;
  }
   return {
     increment: function (val=0) {
       changeNum(val + 1);
     },
     value: function () {
       return counter;
     },
   };
})();


decrementNUm.increment(5)
decrementNUm.increment()
decrementNUm.increment()

decrementNUm.increment()


console.log(decrementNUm.value())
