var arr = [1,2,3,4,5,6,7,8]

console.log(filter(arr,function(item, index, array){ return item > 4}))
console.log(filter(arr))

function filter(arr = [], condition = function() {return true}) {
  var newArr = []

  for(let i = 0, len = arr.length; i < len ; i++) {
    if (condition(arr[i], i, arr)) {
      newArr.push(arr[i])
    }
  }

  return newArr
}