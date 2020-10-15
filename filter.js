Array.prototype.myFilter = function (fn) {
  let ret = []

  for (let i = 0; i < this.length; i++) {
    fn.call(null, this[i], i, this) && ret.push(this[i])
  }

  return ret
}

const t = [1, 2, 3, 4, 5].myFilter((e) => {
  return e % 2 === 0
})

console.log(t)
