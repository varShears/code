function _proxy(data) {
  Object.keys(data).forEach((key) => {
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: function () {
        return data[key]
      },
      set: function (newVal) {
        data[key] = newVal
      },
    })
  })
}
