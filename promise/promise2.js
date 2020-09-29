
function MyPromise(fn) {
  console.log('promise created.')
  var callbacks = [],
      value = null,
      status = 'pending';

  this.then = function(onFullfilled, tag) {
    console.log(tag + "-> then.")
    return new MyPromise(function(resolve) {
      console.log('register.')
      handle({
        onFullfilled: onFullfilled || null,
        resolve: resolve
      })
    })
  }

  var handle = function(callback) {
    console.log('handle')
    if (status === 'pending') {
      console.log('push>', callback)
      callbacks.push(callback)
      return
    }

    if (!callback.onFullfilled) {
      callback.resolve(value)
      return
    }

    console.log('callback.onFullfilled:' + callback.onFullfilled)
    var result = callback.onFullfilled(value)
    callback.resolve(result)
  }

  var resolve = function(newValue) {
    if (newValue && (typeof newValue == 'object' || typeof newValue == 'function')) {
      console.log('resolve promise invoked.')
      var then = newValue.then
      if (typeof then == 'function') {
        then.call(newValue, resolve)
        return
      }
    }

    status = 'fulfilled'
    value = newValue
    setTimeout(function() {
      console.log("invoke resolve.", "callbacks.length = " + callbacks.length)
      callbacks.forEach(function(callback) {
        handle(callback)
      })
    }, 0)
  } 

  fn(resolve)
}

var lastMethods = function(result) {
  console.log("game over.")

}

var getUserJobById = function (id) {
  return new MyPromise(function (resolve) {
    setTimeout(function () {
      console.log('------------------------')
      console.log('getUserJobById promise resolve.')
      resolve('getUserJobById invoked.')
    }, 2000)
  })
}

var getUserId = function () {
  return new MyPromise(function (resolve) {
    setTimeout(function() {
      console.log('------------------------')
      console.log('getUserId promise resolve.')
      resolve(9876)
    }, 4000)

  })
}

getUserId()
  .then(getUserJobById, "first")
  .then(lastMethods, "secode")

// var p = new MyPromise(function(resolve) {
//   setTimeout(function(){
//     resolve('sdfsdfsdf')
//   }, 500)
// }).then(function(result) {
//   console.log(result)
// }).then(function(result) {
//   console.log(result)
// })

// setTimeout(function() {
//   p.then(function (result) {
//     console.log(result)
//   })
// }, 2000)






