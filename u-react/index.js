import { html, render } from 'https://unpkg.com/lit-html@2.8.0/lit-html.js?module'
import router, {navigate} from './router.js'
import useState from './useState.js'
import useEffect from './useEffect.js'
import { useContext, createContext } from './useContext.js'
import useReducer from './useReducer.js'

const createRoot = (element, RootComponent) => {
  const renderApp = async () => {
    const content = await router()
    const app = await RootComponent(content)
    render(app, element)
  }
  window.addEventListener('popstate', renderApp)
  renderApp()
}

export { 
  createRoot, 
  html, 
  navigate, 
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
}
