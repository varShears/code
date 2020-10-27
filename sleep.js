function sleep(fn, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  }).then(() => {
    fn()
  })
}

function say() {
  console.log('a')
}

sleep(say, 5000)
