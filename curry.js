// function curry(fn) {
//   const slice = Array.prototype.slice;
//   const args = slice.call(arguments, 1);
//   return function() {
//     const otherArgs = slice.call(arguments);
//     return fn.apply(this,args.concat(otherArgs));
//   }
// }

// function curry(fn) {
//   const slice = Array.prototype.slice
//   const args = slice.call(arguments, 1)
//   return function () {
//     const otherArgs = slice.call(arguments)
//     return fn.apply(this, args.concat(otherArgs))
//   }
// }

// function A(a, b, c, d) {}

// function curry(fn) {
//   let args = [...arguments].slice(1)

//   function A() {
//     args.push(...arguments)

//     return A
//   }

//   A.toString = function () {
//     return fn.call(null, ...args)
//   }

//   return A
// }

// function add() {
//   const args = [].slice.call(arguments)
//   return args.reduce((sum, cur) => sum + cur, 0)
// }

// const a = curry(add, 3)
// const b = a(1)(2)(3)

// console.log(b.toString())

// function curry(fn) {
//   const args = [...arguments].slice(1)
//   function A() {
//     args.push(...arguments)
//     return A
//   }

//   A.toString = function () {
//     return fn.call(null, ...args)
//   }

//   return A
// }

// function add() {
//   return [...arguments].reduce((sum, cur) => sum + cur, 0)
// }

// // a(1)(2)(3) = 6
// const b = curry(add)
// let a = b(1)(2, 3)

// console.log(a.toString())

function curry(fn) {
  const args = [...arguments].slice(1)

  function A() {
    args.push(...arguments)
    return A
  }

  A.MyWay = function () {
    return fn.call(null, ...args)
  }

  return A
}

const add = function () {
  const args = [...arguments]
  return args.reduce((sum, cur) => sum + cur, 0)
}

const a = curry(add)
const b = a(1)(2)(3)
console.log(b.MyWay())
