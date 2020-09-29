
const numbers = []
const proxy = new Proxy(numbers, {
  set(target, key, value) {
    if (value < 0) {
      value = 0
    } else if (value > 100) {
      value = 100
    }
    target[key] = value
    // 对于set而言来说，如果操作成功必须返回true,否则会被视为失败
    return true
  }
})

proxy.push(1)
proxy.push(101)
proxy.push(-10)

console.log(numbers)