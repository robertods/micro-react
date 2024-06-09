import { html, createRoot } from './u-react/index.js'
import { GlobalProvider } from './context/GlobalContext.js'

const App = (page) => {
  return html`
  <div style="border: 1px solid red;">
    ${GlobalProvider(page)}
  </div>
  `
}

createRoot(document.getElementById('root'), App)

