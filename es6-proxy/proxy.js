const xionwang = {
  loveLetter: '我喜欢你，我想和你睡觉'
}

const proxy = new Proxy(xionwang, {
  get(target, key) {
    if (key === 'loveLetter') {
      return target[key].replace('睡觉', '一起在晨辉的沐浴下起床')
    }
  }
})

function sendToMyLove(obj) {
  console.log(obj.loveLetter)
  return '小伙子还挺有诗情画意的么，不过老娘不喜欢，滚'
}

console.log(sendToMyLove(proxy))