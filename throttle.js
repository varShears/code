// 时间戳

function throttle(fn, delay) {
  let now = new Date().getTime()
  return function () {
    if (new Date() - now >= delay) {
      fn.call(null, arguments)
      now = new Date().getTime()
    }
  }
}

// 计时器
function throttle1(fn, delay, context) {
  let bool = true
  return function () {
    if (!bool) return
    bool = false
    const args = arguments
    setTimeout(() => {
      fn.apply(context, args)
      bool = true
    }, delay)
  }
}

function throttle2(fn, delay, context) {
  let timestamp = 0,
    timer = null
  return function () {
    const remain = delay - (Date.now() - timestamp)
    const args = [...arguments]
    timer && clearTimeout(timer)
    if (remain <= 0) {
      fn.apply(context, args)
      timestamp = Date.now()
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timestamp = Date.now()
      }, remain)
    }
  }
}
