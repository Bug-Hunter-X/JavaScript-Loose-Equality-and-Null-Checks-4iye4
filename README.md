# JavaScript Loose Equality and Null Checks

This repository demonstrates a common JavaScript bug related to loose equality (==) and null checks.  The `foo` function attempts to handle null values, but due to JavaScript's type coercion, the null check isn't as robust as it appears.

## The Bug
The `bug.js` file contains the buggy code.  The function `foo` intends to prevent addition if either `a` or `b` is null. However, using loose equality (`==`) with null can lead to unexpected behavior in certain cases. 

## The Solution
The `bugSolution.js` file provides a corrected version using strict equality (`===`). Strict equality prevents type coercion, ensuring that the null check is accurate and that the addition only happens when both inputs are numbers.