
/**
 * 1、‘’+数组，将数组变成字符串，其值会逗号隔开
 * 2、使用eval函数传入的是字符串
 * 3、this不能this(),不能this=,但是可以var a = this
 * 4、临时给context.fn,再执行context.fn(),这个时候context就是this
 * 
 */
Function.prototype.call5 = function(context) {
    context = context || window
    var len = arguments.length
    context.fn = this;
    var args = []
    for(var i = 1; i < len; i++) {
        args.push(arguments[i])
    }

    var argStr = ''+args
    var result = eval('context.fn('+argStr+')')

    delete context.fn;
    return result;
}

Function.prototype.call6 = function(context) {
    context = context || window
    context.fn = this;

    var args = [...arguments].slice(1)
    var result = context.fn(...args)

    delete context.fn;
    return result;
}

function A() {
    this.name = '123'
    return this.name
}

var b = {
    name: 1
}

var result = A.call5(b)
console.log('call es5', result)

result = A.call6(b)
console.log('call es6', result)