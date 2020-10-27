let arr = [
  1,
  '1',
  NaN,
  NaN,
  new String(1),
  new String(1),
  { a: 1 },
  { a: 1 },
  null,
  null,
]

const reduce = function (arr) {
  let newArr = [],
    map = new Map(),
    tmp
  for (let val of arr) {
    if (typeof val === 'object' && val != null) {
      if (val.constructor === Object) {
        // {}
        tmp = getObj(val)
      } else {
        // new String()
        tmp = val.toString()
      }
      if (!map.has(tmp)) {
        map.set(tmp, val)
        newArr.push(val)
      }
    } else {
      !newArr.includes(val) && newArr.push(val)
    }
  }
  map.clear() // 清除map值
  return newArr
  function getObj(obj) {
    let str = ''
    for (let i in obj) {
      if (!obj.hasOwnProperty(i)) continue
      if (typeof obj[i] === 'object') {
        str += getObj(obj[i])
      } else {
        str = `${i}:${obj[i]}`
      }
    }
    return str
  }
}

console.log(reduce(arr))
