
/**
 * 概念：
 * 柯里化是将多个参数的一个函数，转成一系列一次只处理一个参数的函数，并接受余下参数而且返回结果的新函数
 * 关键点：一个处理多个参数的函数->多个处理一个参数的函数集合->返回计算结果
 * 
 * 
 * 关键实现/设计
 * 1、使用闭包概念缓存多次输入的参数
 * 2、使用高阶函数概念，将缓存函数返回，
 */

const add = (...args) => args.reduce((total, currVal) => total + currVal) 

const curring = (fn) => {
    var args = [] // 使用闭包缓存输入参数，关键技术点。
    
    return function reFn(...rest) {
        if (rest.length === 0) {
            return fn(...args) // 没有参数时再执行add函数，结果返回
        } else {
            args.push(...rest)
        }

        return reFn; // 函数内部返回自己，可以达到链式调用
    }
}

const sum = curring(add) // 包装模式，装饰器模式，对add函数做包装

sum(1,2)(3)
sum(4)
var result = sum()

console.log('sum result is', result) // 要求输出10