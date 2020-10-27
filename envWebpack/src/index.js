import { foo, log } from './foo.js'
import './index.css'
import img from './imgs/333.jpg'

log(foo)

log('asd')

const dom = document.createElement('img')

dom.setAttribute('src', img)

document.body.appendChild(dom)
