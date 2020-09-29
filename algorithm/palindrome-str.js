
const str = 'mamam'

function checkIfPalidrome(str) {
  return str === str.split('').reverse().join('')
}

const result = checkIfPalidrome(str)
console.log('result is,' + result)