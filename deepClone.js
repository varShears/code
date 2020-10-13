function clone(data, map = new Map()) {
  let newObj
  if (typeof data === 'object') {
    newObj = Array.isArray(data) ? [] : {}
    if (map.get(data)) {
      return map.get(data)
    }
    map.set(data, newObj)
    for (const key in data) {
      newObj[key] = data[key]
    }
    return newObj
  } else {
    return data
  }
}

// const data = {
//   field1: 1,
//   field2: undefined,
//   field3: 'ConardLi',
//   field4: {
//     child: 'child',
//     child2: {
//       child2: 'child2',
//     },
//   },
// }

const data = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },
  field4: [2, 4, 8],
}

data.data = data

clone(data)
console.log(clone(data))
