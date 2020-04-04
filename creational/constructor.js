/**
 * create new objects with their
 * own object scope
 */
class ClassBasedExample {
  // creating new instance.
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  toString() {
    return this.param1 + ' ' + this.param2;
  }
}

// function based example of constructor fx
/**
 * Best usage of Prototype
 * Prototype -> An encapsulation of properties that an object links to.
 */
const FunctionBasedExample = function (param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
}

FunctionBasedExample.prototype.toString = function () {
  return this.param1 + ' ' + this.param2;
}

/**
 * Functions
 * 1. create brand new object
 * 2. will link to object prototype
 * 3. bing this to the object scope
 * 4. return this
 */

const newClassBasedObj = new ClassBasedExample('Hello', 'ezkemboi');
const newFunctionBasedObj = new FunctionBasedExample('Hello', 'ezkemboi');

console.log('Class Based -> ', newClassBasedObj)
console.log('String -> ', newClassBasedObj.toString());
console.log('\nFunction -> ', newFunctionBasedObj)
console.log('\n String -> ', newFunctionBasedObj.toString());
