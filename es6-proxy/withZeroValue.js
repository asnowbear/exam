/**
 *  使用proxy机制对对象进行拦截，访问对象未定义属性时返回初始值(0)
 */

const withZeroValue = (target, zeroValue) => new Proxy(target,{
    get: (target, perproKey) => perproKey in target ? target[perproKey] : zeroValue
})

var a = { b: 1 }
var aa = withZeroValue(a, 0);
console.log('withZeroValue', aa['cc'])

var aaa = withZeroValue(a, 1);
console.log('withZeroValue', aaa['cc'])

