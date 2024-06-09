import { html, createRoot } from './u-react/index.js'

const Provider = (children) => {
  return html`<section>${children}</section>`
}

const App = (page) => {
  return html`
  <div style="border: 1px solid red;">
    ${Provider(page)}
  </div>
  `
}

createRoot(document.getElementById('root'), App)

