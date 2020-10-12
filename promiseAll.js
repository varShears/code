const all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    let result = []
    for (const [index, promise] of promises.entries()) {
      promise
        .then((res) => {
          count++
          result[index] = res
          count === promises.length && resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}
