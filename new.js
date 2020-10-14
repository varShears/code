function newOperator(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw new TypeError('Type Error')
  }
  const obj = Object.create(ctor.prototype) // 创建带有构造函数的Object
  const res = ctor.apply(obj, args) // 创建带有构造函数方法的对象

  const isObject = typeof res === 'object' && res !== null
  const isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}
