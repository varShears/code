function debounce(fn, delay, context) {
  let timer = null
  return function () {
    const args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}
