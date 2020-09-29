
// 利用Promise的原理，先注册，再执行

function LazyMan(name) {
  this.queue = []
  this.queue.push(() => {
    console.log('hi this is ' + name)
    this.next()
  })

  setTimeout(() => {
    this.next()
  })
}

LazyMan.prototype.next = function() {
  var fn = this.queue.shift()
  fn && fn()
}

LazyMan.prototype.eat = function(dinnerName) {
  this.queue.push(() => {
    console.log('Eat '+dinnerName + '~')
    this.next()
  })

  return this
}

LazyMan.prototype.sleep = function(time) {
  this.queue.push(() => {
    setTimeout(() => {
      console.log('Wake up after '+ time)
      this.next()
    }, time * 1000)
  })

  return this
}

LazyMan.prototype.sleepFirst = function(time) {
  this.queue.unshift(() => {
    setTimeout(() => {
      console.log('Wake up after ' + time)
      this.next()
    }, time * 1000)
  })
  return this
}

// new LazyMan("Hank").sleep(2).eat("supper")
new LazyMan("Hank").sleepFirst(2).eat("supper")
// ReferenceError a is not defined