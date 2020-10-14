const str = '}{([sdasdsda])}'

function close(str) {
  const leftArray = []
  const arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '{' || arr[i] === '[' || arr[i] === '(') {
      leftArray.push(arr[i])
      if (
        leftArray[0] === '}' ||
        leftArray[0] === ']' ||
        leftArray[0] === ')'
      ) {
        return false
      }
    }
    if (arr[i] === '}' || arr[i] === ']' || arr[i] === ')') {
      const judgeStr = leftArray[leftArray.length - 1] + arr[i]
      if (judgeStr === '{}' || judgeStr === '[]' || judgeStr === '()') {
        leftArray.pop()
      } else {
        return false
      }
    }
  }

  if (!leftArray.length) {
    return true
  }
}

console.log(close(str))
