import { getKey } from './utils.js'
let effects = {}

export const useEffect = async (effect, deps) => {
  const key = getKey()

  if(!effects[key]?.deps || depsHaveChanged(effects[key].deps, deps)) {
    const cleaner = await effect()
    effects[key] = { 
      cleaner, 
      deps 
    }
  }
}

window.debugEffect = () => {
  console.log(effects)
}

export const clearEffects = () => {
  Object.keys(effects).forEach(async (key) => {
    if(typeof effects[key].cleaner === 'function'){
      await effects[key].cleaner()
    } 
  })
  effects = {}
}

export default useEffect


function depsHaveChanged(oldDeps, newDeps) {
  if (oldDeps.length !== newDeps.length) {
      return true
  }
  return oldDeps.some((value, index) => !depsHaveChanged(value, newDeps[index])) 
}