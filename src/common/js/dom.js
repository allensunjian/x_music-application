// 抛出 两个方法 自动添加 slider 的class
// 1、添加class
// 2、判断是否已经有了class
export function addClass(el, className) {
  if (hasClass(el, className)) {
    //  如果验证到该元素有该classname 则返回什么也不做
    return
  }
  // 没有该  className
  let newClass = el.className.split('')
  // 取到现有的className 打散成数组
  newClass.push(className)
  // push进去想要的className
  el.className = newClass.join('')
  // 把newclass 数组 拼接到el.className  上
}
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  // 正则验证 是是否有className 正则（以className开头或者有空白字符在className前面 +以空白字符或者className结尾 ）
  return reg.test(el.className)
  // 返回验证结果
}

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}

// 做能力检测
let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
  return false
})()
export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }
  if (vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substring(1)
  // 首字符大写加 剩余部分
}
