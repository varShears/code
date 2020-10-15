const { domain } = require('process')

function Vdom(tagName, props, children) {
  this.tagName = tagName
  this.props = props
  this.children = children
}

function _createElement(vDomObj) {
  let dom = document.createElement(vDomObj.tagName)
  for (const i of vDomObj.props) {
    dom.setAttribute(i.key, i.val)
  }
  if (vDomObj.children) {
    vDomObj.children.forEach((e) => {
      dom.appendChild(_createElement(e))
    })
  }

  return dom
}
//
_createElement(jsonObj)
