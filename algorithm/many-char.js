const str = 'afjghdfraaaasdenasssssssssssssssss'

const result = calTheMostCharFormStr(str)
console.log(result)

function calTheMostCharFormStr2(str = '') {
  

}

function calTheMostCharFormStr(str = '') {
  const exsitObj = new Map()

  for (let i = 0, len = str.length; i < len; i++) {
    const char = str.charAt(i)
    if (!exsitObj.has(char)) {
      exsitObj.set(char, 0)
    }

    let count = exsitObj.get(char)
    exsitObj.set(char, ++count)
  }

  console.log(exsitObj)

  const keys = exsitObj.keys()
  let target = '', count = Number.MIN_VALUE
  for (let key of keys) {
    const currKeyCount = exsitObj.get(key)
    if (currKeyCount > count) {
      count = currKeyCount
      target = key
    }
  }

  return target
}


