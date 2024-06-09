import { html } from '../../u-react/index.js'

const ProductList = ({products}) => html`
  <ul>
    ${products.map(p => html`
      <li>
        ${p.name}
        <strong>$${p.price}</strong>
      </li>
    `)}
  <ul>
`

export default ProductList