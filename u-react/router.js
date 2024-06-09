import { defaultView, routerHash } from '../u-react.config.js'
import { clearStates } from "./useState.js"
import { clearEffects } from "./useEffect.js"
import { clearReducers } from './useReducer.js'

let modulePath = null
let preModulePath = null
let module = null

const router = async () => {
  const page = getPathname()
  const [ , pageFolder, ...params] = page.split('/')
  const [id, action] = params
  const fileName = action || (isNumber(id) ? "[id]" : (id || "index"))

  try{
    modulePath = `/pages/${pageFolder}/${fileName}.js`
    module = await import(modulePath)
  }
  catch(error) {
    console.log(error)
    modulePath = `/pages/404/index.js`
    module = await import(modulePath)
  }

  if(modulePath !== preModulePath) {
    preModulePath = modulePath
    clearStates()
    clearEffects()
    clearReducers()
  }

  return module.default(...params)
}

function getPathname() {
  if(routerHash) {
    const { hash } = window.location
    return hash === '' || hash === '#/' ? defaultView : hash.replace('#', '')
  }
  const { pathname } = window.location
  return pathname === '/' ? defaultView : pathname
}

export const navigate = (url) => {
  if(routerHash) {
    window.location.hash = url
  }
  else{
    window.history.pushState({}, '', url)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
}

export function refresh() {
  routerHash
    ? window.dispatchEvent(new HashChangeEvent('hashchange'))
    : window.dispatchEvent(new PopStateEvent('popstate'))
}

function isNumber(nro){
  return nro && nro.match(/[0-9]+/)
}

export default router
