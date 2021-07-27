
// 使用setTimeout的巧妙之处，在于
// 多少delay必执行
var treble = function(fn, delay) {
    var timer = null

    return function(...args) {
        var me = this;
        timer && clearTimeout(timer) // 频率过高，会把上次的给清空掉

        timer = setTimeout(() => {
            fn.call(me, ...args);
        }, delay);
    }
}

// 下面的写法
// 会照成不执行的情况，需要加定时器

// var treble2 = function(fn, delay) {
//     var last = null
//     return function(...args) {
//         var now = new Date()
//
//         if (now - last < delay) {
//             last = now;
//
//             $$$$--需要加定时器---$$$$$
//
//         } else {
//             fn.call(this, ...args)
//         }
//     }
// }


var a = function() {
    console.log('sfsdfsf')
}

var wrap =  treble(a)

setInterval(() => {
    
}, 10);


