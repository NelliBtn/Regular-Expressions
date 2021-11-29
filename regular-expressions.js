/**
 * Regular expressions are a way to describe patterns in string data.
 * They form a small separate language that is part of JS and many other languages and systems.
 *
 * The regular expression is a type of object. 
 * It can be constructed with the RegExp constructor or written as a literal value by enclosing a pattern in /'s.
 */

// with constructor a pattern is written as a normal string
let re1 = new RegExp('abc');

// need to put backslash before any forward slash we want to be a part of pattern
let re2 = /abc/; 
let eighteenPlus = /eighteen\+/; // 'eighteen+'

