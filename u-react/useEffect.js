import { getKey } from './utils.js'
let effects = {}

export const useEffect = (effect, deps) => {
  const key = getKey()

  if(!effects[key]?.deps || depsHaveChanged(effects[key].deps, deps)) {
    effects[key] = { cleaner: effect(), deps }
  }
}

window.debugEffect = () => {
  console.log(effects)
}

export const clearEffects = () => {
  Object.keys(effects).forEach(
    key => typeof effects[key].cleaner === 'function' && effects[key].cleaner()
  )
  effects = {}
}

export default useEffect


function depsHaveChanged(oldDeps, newDeps) {
  if (oldDeps.length !== newDeps.length) {
      return true
  }
  return oldDeps.some((value, index) => value !== newDeps[index])
}