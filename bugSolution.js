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

function fooStrict(a, b) {
  if (a === null || b === null) {
    return;
  }
  console.log(a + b);
}

fooStrict(1, 2); // Output: 3
fooStrict(null, 2); // Output: undefined
fooStrict(1, null); // Output: undefined
fooStrict(null, null); // Output: undefined