Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  context = context || window

  context.fn = this

  let result

  if (arguments[0]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn

  return result
}

function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.myApply(this, [name, price])
  this.category = 'food'
}

console.log(new Food('cheese', 5).name)
