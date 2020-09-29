
var arr1 = [1,2,[2,3,4,[4,5], 90],7]
console.log(arr1.length)
console.log(flat(arr1, 1))

function flat(arr, deep) {
  if (!Object.prototype.toString.call(arr) == '[object, Array]') {
    return undefined
  }

  deep = deep || 1
  var result = []
  var loop = function(item, count) {
    if (count + 1 > deep) {
      return
    }

    if (Array.isArray(item)) {
      count++
      item.forEach(function(i) {
        loop(i, count)
      })
    } else {
      result.push(item)
    }
  }

  arr.forEach(function(item) {
    loop(item, 0)
  })

  return result
}