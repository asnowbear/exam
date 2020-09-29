
// iife: immediately invoked function expression
// 通常的目的是隔离作用域


function foo1() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log('i:', i)
    })
  }
}

foo1()

// 改造iife

function foo2() {
  for (var i = 0; i < 5; i++) {
    (function(i) {
      setTimeout(function() {
        console.log('i', i)
      })
    })(i)
  }
}

foo2()

// 使用 let 和 const

function foo3() {
  for (let i = 0; i < 5; i++) {
    console.log('ii', i)
  }
}

foo3()