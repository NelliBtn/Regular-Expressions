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