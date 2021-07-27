
function MyPromise(fn) {
    var callbacks = [],
        value = null,
        status = 'pending';

    this.then = function (onFullfilled, tag) {

        return new MyPromise(function (resolve) {
            handle({
                onFullfilled: onFullfilled || null,
                resolve
            })
        })
    }

    var handle = function (callback) {
        if (status === 'pending') {
            callbacks.push(callback)
            return
        }

        if (!callback.onFullfilled) {
            callback.resolve(value)
            return
        }

        var result = callback.onFullfilled(value)
        callback.resolve(result)
    }

    var resolve = function (newValue) {
        if (newValue && (typeof newValue == 'object' || typeof newValue == 'function')) {
            var then = newValue.then
            if (typeof then == 'function') {
                then.call(newValue, resolve)
                return
            }
        }

        status = 'fulfilled'
        value = newValue
        setTimeout(function () {
            callbacks.forEach(function (callback) {
                handle(callback)
            })
        }, 0)
    }

    fn(resolve)
}

var lastMethods = function (result) {
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
        setTimeout(function () {
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






