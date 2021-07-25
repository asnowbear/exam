Function.prototype.apply5 = function(context, args) {
    context = context || window
    context.fn = this

    var result = undefined
    if (args) {
        var argStr = '' + args
        result = eval('context.fn('+argStr+')')
    } else {
        result = eval('context.fn()')
    }

    delete context.fn;
    return result;
}

Function.prototype.apply6 = function(context, args) {
    context = context || window
    context.fn = this

    console.log('args inner', args)

    var result = undefined
    if (args) {
        result = context.fn()
    } else {
        result = context.fn(...args)
    }

    delete context.fn;
    return result;
}

function a(args, b, c) {
    this.name = '222->' + args + b + c
    console.log('args', args)
    return this.name
}

var b = {
    name: 1
}

var res = a.apply5(b, [1,2,3])
console.log('res', res)
 res = a.apply6(b, [1,2,3])
console.log('res6', res)