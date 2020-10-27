Array.prototype.quickSort = function () {
  const len = this.length
  if (len < 2) return this
  const base = this[0],
    left = [],
    right = []
  for (let i = 0; i < len; i++) {
    const iv = this[i]
    iv >= base && right.push(iv)
    iv < base && left.push(iv)
  }
  return left.quickSort().concat(base, right.quickSort())
}

const arr = [2, 5, 1, 3, 7, 4, 5, 6, 6, 99]

const ret = arr.quickSort()
console.log(ret)
