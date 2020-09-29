function Parent() {
  this.age = 50
  this.name = 'parent'
}

Parent.prototype.getName = function() {
  return this.name
}

function Child() {
  Parent.call(this)
  this.address = 'i'
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

var c = new Child()
console.log(c.getName())
