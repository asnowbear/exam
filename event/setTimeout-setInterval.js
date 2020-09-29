


// (function() {
//   var timerId = setTimeout(function(){
//     console.log('timeout', new Date())
//   }, 0)

//   var intervalId = setInterval(function() {
//     console.log('interval', new Date())
//   }, 0)

//   console.log('end')
// })()

for (var i = 0;i < 5; i++) {
  (function(j) {
    setTimeout(function() {
    console.log(new Date, j)
  }, 1000)})(i)

}

console.log(new Date, i)