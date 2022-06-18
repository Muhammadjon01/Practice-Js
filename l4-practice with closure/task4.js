var decrementNUm = (function() {
  counter = 0;
  function changeNum(val) {
    counter += val;
  }
  return {
    decrement: function (val=0) {
      changeNum(val-1);
    },
    value: function () {
      return counter;
    },
  };
})()


decrementNUm.decrement(10);
decrementNUm.decrement();
decrementNUm.decrement();
decrementNUm.decrement();
decrementNUm.decrement();
decrementNUm.decrement();


console.log(decrementNUm.value());
