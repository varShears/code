class Lazyman {
  constructor(name) {
    this.queue = []
    this.name = name
    this.queue.push(() => {
      console.log('Hi! My name is' + this.name + '!')
      this.next()
    })
    setTimeout(() => {
      this.next()
    }, 0)
  }

  next() {
    const cur = this.queue.shift()
    cur && cur()
  }

  eat() {}
}
