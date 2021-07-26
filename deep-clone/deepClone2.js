
function isObject(x) {
    return Object.prototype.toString.call(x) === '[object, Object]' && x !== null;
}

function deepClone(source, hash = new WeakMap()) {
    if (!isObject(source)) {
        console.log('object不是', source)
        return source; // 过滤掉 null undefined 基本数据类型 
    }
    if(hash.has(source)) return hash.get(source); // 解决循环引用的问题

    let target = Array.isArray(source) ? [] : {};
    hash.set(source, target); // 持有引用的副本

    Reflect.ownKeys(source).forEach(key => { // ownkyes返回包括Symbol的值
        if (isObject(source[key])) {
            target[key] = deepClone(source[key], hash); // 必须传入hash的值
        } else {
            target[key] = source[key]
        }
    })

    return target;
}


var a = {
    name: 1,
    sex: '男',
    fn: function() { console.log('sdfsdf') },
    b: {
        name1: 'sfsfsd',
        res: new RegExp(),
        ddd: null,
        arr: [{a:1,b:1}, 2, [2,3,4],undefined, 90],
        test: a
    },
    ['a']: Symbol('dddd'),
    map: new Map([[1,2], [2,3]])
}

var res = deepClone(a)
console.log('res', res)