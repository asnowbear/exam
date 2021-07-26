// Note:考虑父类的父类
// left.proto === right.prototype

var a = {}
function Foo(){}

var result = instanceOf1(a, Foo)
console.log(result)

function instanceOf1(left,  right) {
  var proto = left.__proto__
  var prototype = right.prototype

  while(1) {
    if (proto == null) {
      return false
    }

    if (proto === prototype) {
      return true
    }

    proto = proto.__proto__
  }
}