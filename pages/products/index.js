import { html, useContext, navigate } from '../../u-react/index.js'
import Link from '../../components/Link.js'
import ProductList from '../../components/ProductList.js'
import { productsContext } from '../../contexts/ProductsContext.js'

const Products = () => {
  
  console.log("render productos")
  const {products} = useContext(productsContext)

  return html`
    <h1>Productos</h1>
    <button @click=${e => navigate('/products/new')}>New</button>
    ${ProductList({products})}
    ${Link({href:'/', text:'Home'})}
  `
}

export default Products