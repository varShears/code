const arr = [3, 6, 6, 11, 1, 1, 3]

function findRepeat(arr) {
  arr = arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i = i + 2) {
    if (arr[i + 1]) {
      if (arr[i] === arr[i + 1]) {
        continue
      } else {
        return arr[i]
      }
    } else {
      return arr[i]
    }
  }
}

const mark = findRepeat(arr)
console.log(mark)
