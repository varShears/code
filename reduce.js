Array.prototype.Myreduce = function (fn) {
  let ret = []

  for (let i = 0; i < this.length; i++) {
    fn.call(null, ret, this[i], i, this)
  }

  return ret
}

let a = [1, 2, 3, 4, 5].Myreduce((sum, cur) => sum.push(cur), [])

console.log(a)
