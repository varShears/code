function clone(data, map = Map()) {
  const result = Array.isArray(data) ? [] : {}
  for (const key in data) {
    if (map.get())
      if (data.hasOwnProperty(key)) {
        if (typeof data[key] === 'object' && data[key] !== null) {
          result[key] = clone(data[key])
        } else {
          result[key] = data[key]
        }
      }
  }
  return result
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
