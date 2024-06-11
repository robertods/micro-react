import { html, createRoot } from './u-react/index.js'
import { GlobalProvider } from './contexts/GlobalContext.js'
import { ProductsProvider } from './contexts/ProductsContext.js'

const App = (page) => {
  return html`
  <div style="border: 1px solid red;">
    ${
      GlobalProvider(
        ProductsProvider(
          page
        )
      )
    }
  </div>
  `
}

createRoot(document.getElementById('root'), App)

