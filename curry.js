// function curry(fn) {
//   const slice = Array.prototype.slice;
//   const args = slice.call(arguments, 1);
//   return function() {
//     const otherArgs = slice.call(arguments);
//     return fn.apply(this,args.concat(otherArgs));
//   }
// }

function curry(fn) {
  const slice = Array.prototype.slice
  const args = slice.call(arguments, 1)
  return function () {
    const otherArgs = slice.call(arguments)
    return fn.apply(this, args.concat(otherArgs))
  }
}

function A(a, b, c, d) {}
