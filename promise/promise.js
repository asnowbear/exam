
function Promise1(fn) {
  var callbacks = []

  this.then = function(resolve, reject) {
    console.log('then')
    callbacks.push(resolve)
    return this
  }

  function resolve(value) {
    console.log('promise resolve.')
    setTimeout(function() {
      callbacks.forEach(function(callback) {
        callback(value)
      })
    }, 0)
  }

  fn(resolve)
}

new Promise1(function(resolve, reject) {
  setTimeout( 
    function() {
      console.log('resolve invoked.')
      resolve('err happened.')
    }, 1000)
}).then( function(res) {
  setTimeout(function(){
    

  }, 2000)
}).then( function(res) {
  console.log('ddddd')
})


