const ar = [55, 1234, 1, 33, 11, 24, 56, 88]

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Error')
  }
  if (arr.length <= 1) {
    return arr
  }

  for (let i = arr.length - 1; i > 0; i--) {
    // 从 0 到 `length - 1` 遍历
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
  }

  return arr
}

const a = bubbleSort(ar)

console.log(a)
