function f(n) {
  if (n == 2) {
    return 1;
  }
  if (n % 2 == 0) {
    console.log(n / 2);
    return f(n / 2);
  } else if (n % 2 !== 0) {
    console.log(n * 3 + 1);
    return f(n * 3 + 1);
  }
}

console.log(f(3));
