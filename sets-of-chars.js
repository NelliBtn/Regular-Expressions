/**
 * Putting a SET OF CHARACTERS between [] makes that part of expression
 * MTCH ANY of the chars between the brackets.
 */

// match all strings that contain a digit
console.log(/[0123456789]/.test('in 1992')); //true
console.log(/[0-9]/.test('in 1992')); //true

// BUILT-IN SHORTCUTS for common character groups:

/**
 \d - any digit
 \w - an alphanumeric character (all letters and digits)
 \s - any whitespace character (space, tab, newline, etc)
 \D - NOT a digit
 \W - NONalpanumeric
 \S - NONwhitespace
 . - any char except for a newline
 */

console.log(/\d/.test('in 1992')); //true
console.log(/\w/.test('in 1992')); //true

// to INVERT a set of chars (match ANY char EXCEPT the ones in the set) use [^]

let nonBinary = /[^01]/; // match anything but 01
console.log(nonBinary.test('01000100111001001001')); //false => only 0's and 1's
console.log(nonBinary.test('01001110101020111102')); //true => match 2