// 1:使用Promise
/**
 * 使用定时器 + Promise 更优雅
 * @param {} time 
 */
function sleep(time) {
  return new Promise(function(resolve, reject) {
    setTimeout( function() {
      resolve()
    }, 1000 * time)
  })
}

sleep(2).then(function(res){
  console.log('sleep method invoked.')
})

// 2、使用Promise+async/await的方式定义sleep函数
const sleep  = (delay) => new Promise((resolve) => {
  setTimeout(resolve, delay)
})

const repeatedGreetings = async () => {
  await sleep(1000)
  console.log('dfdfdfd')
  await sleep(200)
  console.log('sdfsfffff')
}

// 3、包装setTimeout成fun
/**
 * 使用定时器，将回调函数传入的方式
 */
function sleep2(fn, time) {
  setTimeout(function() {
    fn.call()
  }, time * 1000)
}

sleep2(function() {
  console.log('anthor way sleep function.')
}, 2)






