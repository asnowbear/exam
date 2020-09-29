
const errorMessage = {
  400: '错误请求',
  401: '系统未授权，请重新登录',
  403: '拒绝访问',
  404: '请求失败，未找到改资源'
}

const proxy = new Proxy(errorMessage, {
  get(target, key) {
    const value = target[key]
    return value || '系统异常，请联系管理员'
  }
})

console.log(proxy[400])

console.log(proxy[500])