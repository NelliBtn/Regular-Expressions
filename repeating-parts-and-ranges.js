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

/*
 RANGES {}
 PATTERN SHOULD OCCUR A PRECISE NUMBER OF TIMES
*/

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test('1-30-2003 8:45')); //true

// to specify OPEN-ENDED RANGES omit number after comma => {5,}

console.log(/\d{3,}/.test('22222')); //true
console.log(/\d{3,}/.test('22')); //false