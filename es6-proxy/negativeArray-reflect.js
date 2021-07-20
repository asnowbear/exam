/**
 * 利用proxy机制拦截对象的.操作，使用负下标来从数组的尾部取值
 */
const negativeArray = (array) => new Proxy(array, {
    get: (target, nkey ) => 
        Reflect.get(target, +nkey < 0 ? String(target.length + (+nkey)): nkey )
})

const arr = [1,2,3,4,5]
const negaArr = negativeArray(arr)
console.log('negativeArray', negaArr[-1]);
console.log('negativeArray', negaArr[-2]);