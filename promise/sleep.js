function sleep(time){
    return new Promise(function(res, rej) {
        setTimeout(function(){
            res();
        }, time)
    })
}

sleep(5000).then(function(){
    console.log('睡眠5秒后，开始继续执行线程')
})