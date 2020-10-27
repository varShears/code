const { removeListener } = require('process')

class Subscribe {
  constructor(name = 'subscriber') {
    this.name = name
    this.id = new Date().getTime() + Math.ceil(Math.random() * 10000)
  }

  listen({ publisher, message, handler }) {
    if (publisher instanceof Publisher) {
      this[message + publisher.id + '_handler'] = handler
      publisher.addListener(this, message)
    }

    return this
  }

  unlisten(publisher, message) {
    if (publisher instanceof Publish) {
      publisher.removeListener(this, message)
    }
    return this
  }
}

class Publisher {
  constructor(name = 'publisher') {
    this.messageMap = {}
    this.name = name
    this.id = 'id-' + new Date().getTime() + Math.ceil(Math.random() * 10000)
  }

  addListener(subscriber, message) {
    if (!subscriber || !message) return false

    if (!this.messageMap[message]) {
      this.messageMap[message] = []
    }

    const existIndex = this.messageMap[message].findIndex(
      (exitSubscriber) => exitSubscriber.id === subscriber.id
    )

    if (existIndex === -1) {
      this.messageMap[message].push(subscriber)
    } else {
      this.messageMap[message][existIndex][message + this.id + '_handler'] =
        subscriber[message + this.id + '_handler']
    }
  }

  removeListener(subscriber, message) {
    if (!subscriber) return false

    //如果传了message只删除此message下的订阅关系，否则删除此订阅者的所有订阅关系
    const messages = message ? [message] : Object.keys(this.messageMap)

    messages.forEach((message) => {
      const subscribers = this.messageMap[message]

      if (!subscribers) return false

      let i = subscribers.length
      while (i--) {
        if (subscribers[i].id === subscriber.id) {
          subscribers.splice(i, 1)
        }
      }

      if (!subscribers.length) delete this.messageMap[message]
    })
  }

  publish(message, info) {
    const subscribers = this.messageMap[message] || []

    subscribers.forEach((subscriber) => subscriber[message + '_handler'](info))

    return this
  }
}
