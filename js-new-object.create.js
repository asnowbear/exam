// ------------------------
//  new的作用：
//  var foo = {}
//  foo._proto_ = Foo.prototype
//  Foo.call(foo)
// ------------------------

function Foo() {
  this.age = 10
}

var foo = new Foo()

//  Object.create

var a = Object.create(Foo.prototype)
console.log(a)