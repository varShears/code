const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2)
  }, 3000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3)
  }, 2000)
})
const p4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(4)
  }, 1500)
})

const ps = [p1, p2, p3, p4]

// const run = (p) => {
//   p.then((d) => {
//     console.log(d)

//     const nextP = ps[ps.findIndex((f) => f === p) + 1]
//     if (nextP) {
//       run(nextP)
//     }
//   })
// }
// run(ps[0])

const service = (ps) => {
  const queue = ps

  // while (queue.length > 0) {
  function pick() {
    if (queue.length === 0) {
      return
    }
    const target = queue.shift()
    run(target)
  }

  function run(target) {
    target
      .then((res) => {
        console.log(res)
        pick()
      })
      .catch((err) => {
        console.log(err)
        pick()
      })
  }

  pick()
  // }
}

service(ps)
