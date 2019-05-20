// provide a high level facade for sub modules
// example
// 1. bindEvent

function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
}

// 通过 bindEvent 这个高级接口，为不同的事件提供一个统一
// 的门面接口
bindEvent(elem, 'click', '#div', fn)
bindEvent(elem, 'click', fn)