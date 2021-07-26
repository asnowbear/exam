

// 不考虑参数的简单原型
Function.prototype.bind1 = function(thisObj) {
    var me = this
    return function() {
        return me.apply(thisObj)
    }
}


// var fn = bind(thisObj[,options][,options]) 绑定this不执行
// fn()  后执行，所以bind必须返回一个function
Function.prototype.bind = function(thisObj, ...args) { // 。。。args是es6的写法，
    var me = this
    return function(...args2) {
        return me.apply(thisObj, [...args, ...args2]) // 合并参数
    }
}


var obj = {
    name : 12
};

var fn = (function() {
    console.log('this.name', this.name)
}).bind(obj);

fn();