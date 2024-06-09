import { clearStates } from "./useState.js"
import { clearEffects } from "./useEffect.js"
import { getPathname } from "./utils.js"
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
  }
  return module.default(...params)
}

export const navigate = (url) => {
  window.history.pushState({}, '', url);
  const popStateEvent = new PopStateEvent('popstate');
  window.dispatchEvent(popStateEvent);
};

function isNumber(nro){
  return nro && nro.match(/[0-9]+/)
}

export default router
