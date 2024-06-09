import { getKey } from './utils.js'
import { refresh } from './router.js'

let contexts = {}

const createContext = (initialValue) => {
  const key = getKey()
  contexts[key] = { 
    value: initialValue, 
    //subscribers: new Set(),
    Provider({value, children}){
      if(!compareObjects(value, contexts[key].value)){
        contexts[key].value = value
        refresh()
      }
      return children
    }
  }
  return contexts[key]
}

const useContext = (context) => {
  return context.value
}

window.debugContext = () => {
  console.log(contexts)
}

function compareObjects(obj1, obj2) {
  if(typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return false
  }
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export { createContext, useContext }
