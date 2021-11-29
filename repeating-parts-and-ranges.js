/*
 PLUS SIGN +
 PART MAY BE REPEATED 1 OR MORE TIMES
*/

console.log(/'\d+'/.test("'123'")); // true
console.log(/'\d+'/.test("''")); //false

/*
 STAR SIGN *
 PART MAY BE REPEATED 0, 1 OR MORE TIMES
*/

console.log(/'\d*'/.test("'123'")); //true
console.log(/'\d*'/.test("''")); //true

