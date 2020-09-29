

Promise.all = function(promises) {
  promises = Array.from(promises)
  return new Promise(function(resolve, reject) {
    if (promises.length === 0 ) {
      resolve([])
    } else {
      var len = promises.length
      var results = new Array(len)
      var count = 0

      for(let i = 0; i < len; i++) {
        Promise.resolve(promises[i]).then(function(res) {
          results[i] = res
          count ++
          if (count === len) {
            resolve(results)
          }
        }, function(err) {
          reject(err)
          return
        })

      }

    }
  })
}