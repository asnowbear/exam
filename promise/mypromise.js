function MyPromise(fn) {
    this.thenFns = []
    var me = this;
    var res = function(result) {
        var fns = me.thenFns;
        var lastResult = null;
        for(let i = 0, len = fns.length ;i < len ; i++) {
            var fn = fns[i];
            lastResult = fn(result);
            result = lastResult;
        }
    }

    var rej = function() {}

    setTimeout(function(){
        fn(res, rej)
    }, 0)

    return this;
}

MyPromise.prototype.then = function(fn) {
    this.thenFns.push(fn);
    return this;
}

MyPromise.all = function(fns) {
    let lens = fns.length;
    if (lens === 0) {
        return new MyPromise(function(res, rej){
            res()
        })
    }

    const results = [];
    let tag = 0;

    return new MyPromise(function(resolve, rej) {
        for(let i = 0; i < lens ;i ++) {
            fns[i]().then(function(res) {
                results.push(res);
                tag = tag + 1;

                if (tag === lens) {
                    resolve(results)
                }
            })
            // .catch(function(err){
            //     rej(err) 
            // })
        }
    });
}

var p = new MyPromise(function(res, rej){
    // setTimeout(function(){
    //     res('123')
    // }, 1000)
    res('123');
})

p.then(function(res){
    console.log('res111', res)
    return res
}).then(function(res){
    console.log('res222', res)
})

MyPromise.all([
    function(){
        return new MyPromise(function(res, rej){
            setTimeout(function(){
                console.log('all res1')
                res('res1');
            }, 1000)
        });
    },
    function(){
        return new MyPromise(function(res, rej){
            setTimeout(function(){
                console.log('all res2')
                res('res2');
            }, 2000)
        });
    },
    function(){
        return new MyPromise(function(res, rej){
            setTimeout(function(){
                console.log('all res3')
                res('res3');
            }, 3000)
        });
    },
]).then(function(results){
    console.log('results89', results);
})



