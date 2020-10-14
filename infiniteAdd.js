function infiniteAdd() {
  const args = [...arguments]
  function recursion() {
    args.push(...arguments)
    return recursion()
  }

  recursion.toString = function () {
    return Array.reduce((sum, cur) => sum + cur, 0)
  }

  return recursion
}

infiniteAdd(1)(2)(3)

function infiniteAdd() {
  const args = [...arguments]
  function recursion() {
    args.push(...arguments)
    return recursion
  }

  recursion.toString = function () {
    return Array.reduce((sum, cur) => sum + cur, 0)
  }

  return recursion
}
