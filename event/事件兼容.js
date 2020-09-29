

// -------------------------------------
// 1、addEventListener是三个参数，默认false
//  指定事件是冒泡
// 2、IE添加事件为attachEvent，删除为detachEvent

const EventUtil = {
  addEvent: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler)
    } else {
      element['on'+type] = handler
    }
  },

  removeEvent: function(element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false)
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler)
    } else {
      element['on' + type] = null
    }
  }
}