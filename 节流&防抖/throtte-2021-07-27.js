

/**
 * 节流包装函数，
 * 1、使用包装策略，返回的还是函数
 * 2、使用闭包缓存上一次被包装函数执行的时间
 * 3、计算时间差,差外再执行fn
 */
const throtte = function(fn, delay = 50) {
    let lastTime = null;

    return function(...args) {
        var now = new Date()
        if (now - lastTime > delay) {
            fn.call(this, ...args);
            lastTime = now;
        }
    }
}

var fn = function() {
    console.log('object')
}

// 使用throtte函数包装一下
var wrap = throtte(fn, 1500)

setInterval(wrap, 500)