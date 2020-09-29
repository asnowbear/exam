
// LazyMan("Hank")
const m = LazyMan("Hank").sleep(5)
console.log('m', m)
// LazyMan("Hank").eat("dinner").eat("supper")

function LazyMan(name) {

  name && console.log('hi this is ' + name)

  const me = this

  this.eat = function (footName) {
    console.log(`Eat${footName}~`)
    return me
  }

  this.sleep =  async function(time) {
    var timer = function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function () {
          console.log('Wake up after ' + time)
          resolve()
        }, time * 1000)
      })
    }

    await timer()
    // console.log("this", this.eat)
    return new LazyMan()

  }

  return this
}

function eat() {
  console.log('sdfsdf')
}