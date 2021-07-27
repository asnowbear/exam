

/**
 * 精髓在于：
 * 1、返回一个包裹函数，使用function(){}起来，这个使用在JS的世界里很常见
 * 2、立即执行函数的运用，当然也可以不使用立即执行函数，
 * var addEvent = fn()
 */
const addEvent = (function(){
    if (window.addEventListener) {
        return function (type, el, fn, capture) {
            el.addEventListener(type, fn, capture);
        }
    }
    else if(window.attachEvent){
        return function (type, el, fn) {
            el.attachEvent('on' + type, fn);
        }
    }
})();