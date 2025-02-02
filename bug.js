function foo(a, b) {
  if (a === null || b === null) {
    return;
  }
  console.log(a + b);
}

foo(1, 2); // Output: 3
foo(null, 2); // Output: undefined
foo(1, null); // Output: undefined
foo(null, null); // Output: undefined