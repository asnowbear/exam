/**
 * 利用proxy机制拦截对象的.操作，使用负下标来从数组的尾部取值
 */
const negativeArray = (array) => new Proxy(array, {
    get: (target, nkey ) => {
        const key = Number.parseInt(nkey, 10);
        if (key < 0) {
            const len = target.length;
            const idx = len + key
            return target[idx]
        } else {
            target[key]
        }
    }
})

const arr = [1,2,3,4,5]
const negaArr = negativeArray(arr)
console.log('negativeArray', negaArr[-1]);
console.log('negativeArray', negaArr[-2]);