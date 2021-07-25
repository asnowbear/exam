
function isObject(o) {
  return (typeof o === 'object' || typeof o === 'function') && o !== null
}

function deepClone(obj) {
  if(!isObject(obj)) {
    throw new Error('不是一个对象')
  }

  let target = Array.isArray(obj) ? [] : {}
  for(let key in obj) {
    target[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  }

  return target
}

let test = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  null: null,
  obj: {
    name: '我是一个对象',
    id: 1
  },
  arr: [1,2,3,4],
  func: function() {
    console.log('我是一个函数')
  },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  err: new Error('我是一个错误')
}

let result = deepClone(test)
console.log(result)

for(let key in result) {
  if (isObject(result[key])) {
    console.log(`${key}相同吗？`, result[key] === test[key])
  }
}
