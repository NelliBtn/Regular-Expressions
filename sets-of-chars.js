/**
 * Putting a SET OF CHARACTERS between [] makes that part of expression
 * MTCH ANY of the chars between the brackets.
 */

// match all strings that contain a digit
console.log(/[0123456789]/.test('in 1992')); //true
console.log(/[0-9]/.test('in 1992')); //true