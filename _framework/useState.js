import { getKey } from './utils.js'
let states = {}

export const useState = (initialValue) => {
  const key = getKey()
  states[key] = states[key] || initialValue

  const setState = (newState) => {
    states[key] = newState
    window.dispatchEvent(new PopStateEvent('popstate'))
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
