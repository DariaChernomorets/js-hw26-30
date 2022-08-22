'use strict'

const getFactorial = (n) => {
    if (n === 1 || n === 0) return 1;
    return n * getFactorial(n-1);
}

console.log(getFactorial(4));

const pow = (num, degree) => {
  if (degree === 0 ) return 1;
  if (degree === 1 ) return num;
    return num * pow(num, degree - 1);
}

console.log(pow(2,5));

const sum = (a,b) => {
  if ( b === 0) return a;

  return sum (a+1, b-1);
}

console.log(sum(17,27));