

const toStr = Function.prototype.call.bind(Object.prototype.toString)

/**
 * 1、toStr是个函数
 * 2、太巧妙了，没法写
 * 3、这纯粹是神经病的写法，多此一举，没有必要
 * 4、还是使用下面的写法
 */


// 改造后
toStr([1, 2, 3]); 	// "[object Array]"
toStr('123'); 		// "[object String]"
toStr(123); 		// "[object Number]"
toStr(Object(123)); // "[object Number]"
toStr(new Set())    // "[object Set]"
toStr(new Map())    // "[object Map]"
toStr(new WeapSet())    // "[object WeapSet]"
toStr(new WeapMap())    // "[object WeapMap]



function isArray(obj) { 
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}

function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}

// Test
isArray([1, 2, 3]); // true
isNumber(123); // true
isString('123'); // true