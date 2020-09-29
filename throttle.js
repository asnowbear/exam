function throttle(fn, delay) {
  let time = new Date()

  return function() {
    const curr = new Date()
    if (curr - time > delay) {
      fn.call(this, arguments)
      time = curr
    }
  }
}

function mouseMove(e) {
  console.log('mouse move .')
}

const a = throttle(mouseMove, 300)

document.getElementById('id').
  addEventListener('mousemove', a)


