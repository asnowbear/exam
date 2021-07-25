
function Super() {
    this.name = '123';
}

Super.prototype.a = function() {
    return 'sdfdsfdf'
}

function new1(SuperClass) {
    var obj = {};
    obj.__proto__ = SuperClass.prototype;
    SuperClass.call(obj);
    return obj;
}


var obj1 = new1(Super)
console.log('obj.name', obj1.name)
console.log('obj.a()', obj1.a())