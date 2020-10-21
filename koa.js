class Koa {
  constructor() {
    this.middlewares = []
  }
  use(fn) {
    this.middlewares.push(fn)
  }
}

const app = new Koa()

app.use((next) => {
  console.log(1)
  next()
  console.log(2)
})

app.use((next) => {
  console.log(3)
})

function compose(middlewares) {
  function dispatch(index) {
    if (index === middlewares.length) return
    const fn = middlewares[index]
    fn(function next() {
      dispatch(index + 1)
    })
  }
  dispatch(0)
}

compose(app.middlewares)
