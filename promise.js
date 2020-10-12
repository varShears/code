const STATUS = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
}

class Deferred {
  constructor(callback) {
    this.value = undefined
    this.status = STATUS.PENDING

    this.resolveQueue = []
    this.rejectQueue = []

    let called

    const resolve = (value) => {
      if (called) return
      called = true
      setTimeout(() => {
        this.value = value
        this.status = STATUS.FULFILLED
        for (const fn of this.resolveQueue) {
          fn(this.value)
        }
      })
    }

    const reject = (reason) => {
      if (called) return
      called = true
      setTimeout(() => {
        this.value = reason
        this.status = STATUS.REJECTED
        for (const fn of this.rejectQueue) {
          fn(this.value)
        }
      })
    }

    try {
      callback(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onResolve, onReject) {
    const resolveQueue = this.resolveQueue
    const rejectQueue = this.rejectQueue

    if (this.status === STATUS.PENDING) {
      return new Deferred((resolve, reject) => {
        resolveQueue.push((innerValue) => {
          try {
            const value = onResolve(innerValue)
            resolve(value)
          } catch (error) {
            reject(error)
          }
        })
        rejectQueue.push((innerValue) => {
          try {
            const value = onReject(innerValue)
            resolve(value)
          } catch (error) {
            reject(error)
          }
        })
      })
    } else {
      const innerValue = this.value
      const isFulfilled = (this.status = STATUS.FULFILLED)
      return new Deferred((resolve, reject) => {
        try {
          const value = isFulfilled
            ? onResolve(innerValue)
            : onReject(innerValue)
          resolve(value)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}

new Deferred((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 3000)
})
  .then((val1) => {
    console.log('val1', val1)
    return val1 * 2
  })
  .then((val2) => {
    console.log('val2', val2)
    return val2
  })
