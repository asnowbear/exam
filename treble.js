

function treble(fn, delay) {
  let timer = null

  return function() {
    const arg = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, arg)
    }, delay)
  }
}


function mousemove(e) {
  console.log( 'mouse move .')
}

const a = trebel(mousemove, 300)


document.getElementById('id').addEventListener("mousemove", a)