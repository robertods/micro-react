import { getKey } from './utils.js'
let cleanerEffects = {}
let oldDeps = {}

export const useEffect = (effect, deps) => {
  const key = getKey()

  if(!oldDeps[key] || depsHaveChanged(oldDeps[key], deps)) {
    cleanerEffects[key] = effect()
    oldDeps[key] = deps
  }
}

window.debugEffect = () => {
  console.log(cleanerEffects)
  console.log(oldDeps)
}

export const cleareffects = () => {
  Object.values(cleanerEffects).forEach(f => f())
  cleanerEffects = {}
  oldDeps = {}
}

export default useEffect


function depsHaveChanged(oldDeps, newDeps) {
  if (oldDeps.length !== newDeps.length) {
      return true
  }
  return oldDeps.some((value, index) => value !== newDeps[index])
}