// -----------------------------------------
// 重点：
// call和apply都是给参数伪造一个fn的function方法
// 最后再通过参数.fn来执行这个方法
// -----------------------------------------


Function.prototype.call = function(context) {
  var context = context || window
  context.fn = this // this指代调用者，即为function本身

  var arr = Array.prototype.slice.call(arguments)
  // Array.from(arguments)
  // [].slice.call(arguments)

  for(let i = 0, len = arguments.length; i < len ; i++) {
    arr.push(arguments['i'])
  }

  var result = context.fn(...arr)  // call的传值为arg1|arg2|arg3|
  delete context.fn // 最后删除
  return result
}


Function.prototype.apply = function(context, args) {
  var context = context || window
  context.fn = this
  var result
  if (!args) {
    result = context.fn()
  } else {
    if (Object.prototype.toString.call(args) != '[object Array]') {
      throw new Error('param must be array')
    } else {
      result = context.fn(...args)
    }
  }

  delete context.fn
  return result
}