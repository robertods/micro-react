import { getKey } from './utils.js'
let states = {}

export const useState = (initialValue, returnGet) => {
  const key = getKey()
  states[key] = states[key] || initialValue

  const getState = () => states[key]

  const setState = (newState) => {
    states[key] = newState
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  if(returnGet){
    return [getState, setState]
  }

  return [states[key], setState]
}

window.debugState = () => {
  console.log(states)
}

export const clearStates = () => {
  states = {}
}

export default useState
