import { html } from '../../u-react/index.js'
import Link from '../../components/Link.js'
import ProductForm from '../../components/ProductForm.js'

const ProductsNew = (id, action) => {

  return html`
    <h1>${action} Product</h1>
    ${ProductForm({})}
    ${Link({href:'/products', text:'Products'})}
  `
}

export default ProductsNew