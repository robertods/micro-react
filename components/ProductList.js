import { html, navigate } from '../u-react/index.js'

const ProductList = ({products}) => html`
  <ul>
    ${products ? 
      products.map(p => html`
      <li>
        ${p.name}
        <strong>$${p.price}</strong>
        <button @click=${e => navigate('/products/'+p.id+'/edit')}>Edit</button>
        <button @click=${e => navigate('/products/'+p.id)}>Detail</button>
      </li>
      `)
      : html`<li>No products here</li>`
    }
  <ul>
`

export default ProductList