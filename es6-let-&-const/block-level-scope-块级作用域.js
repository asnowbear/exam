
// 块级作用域，以大括号为区分

function f1() {
  let n = 5

  // 开始一个新的作用域
  if (true) {
    let n = 10
  }

  console.log(n)
}

f1()