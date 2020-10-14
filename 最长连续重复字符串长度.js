const str = 'asdfnjvfkjanklnsadaaasdfbbbbbbbdfsdfaioweriweor'

function getLongestString(str) {
  let cur = []
  let ret = []

  const arr = str.split('')

  for (let i = 0; i < arr.length; i++) {
    if (!cur.length) {
      cur.push(arr[i])
    } else {
      const curString = cur[0]
      if (curString === arr[i]) {
        cur.push(arr[i])
      } else {
        if (cur.length > ret.length) {
          ret = cur
        }
      }
    }
  }

  console.log(ret.length)

  return ret.length
}

getLongestString(str)
