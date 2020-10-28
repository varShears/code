const os = require('os')

/** 打印当前可用内存容量，用于说明闭包内存占用 */
function printMemFree () {
  console.log('当前可用内存：' + (os.freemem() / Math.pow(1024, 3)).toFixed(3) + 'G')
}

/** 此函数用于证明闭包的内存泄漏 */
function func () {
  // 函数运行前创建本函数 func 的闭包

  // 变量 var1 被 fn2 所引用，创建于闭包
  const var1 = 1

  // 变量 var2 没有被函数引用，创建于栈，不置于闭包
  const var2 = 2

  /*
   * bigArray 被 fn3 引用，创建于闭包；
   * ！！虽然 fn3 并没有被返回！！
   * ！！甚至没有被运行！！
   */
  const bigArray = new Array(3e7).fill(1)

  function fn2 () { console.log(var1) }
  function fn3 () { console.log(bigArray.length) }

  // 返回 fn2，此时 bigArray 没了引用，应被回收，但没有
  // 返回 fn2 的用意在于保留 func 的闭包对象不被回收
  return fn2
}

// 打印当前的内存容量，此时还没有在 func 里面创建大数组
console.log('函数运行之前...')
printMemFree()

// 在闭包创建了大数组，未被回收，此时闭包里有 {var1, bigArray}
const retFn = func()

setTimeout(() => {
  // 打印内存容量证明确实没有被回收，如果回收了这里的打印值跟第一次会一样
  console.log('\n10秒后，该回收的都已经回收了...')
  printMemFree()

  console.log(retFn)
}, 10e3)

// retFn = null 解引用时才会回收闭包内存占用

// 结论：应该是函数返回之前把所有创建于闭包但不需要的变量解引用