import { html, useState, useEffect, useContext, navigate } from '../../u-react/index.js'
import Link from '../../components/Link.js'
import ProductForm from '../../components/ProductForm.js'
import { getById } from '../../services/products.js'

const ProductsNew = (id, action) => {

  const [product, setProduct] = useState(null)
  
  useEffect(async () => {
    const resp = await getById(id)
    setProduct(resp)
  }, [])

  return html`
    <h1>${action} Product</h1>
    ${product ? ProductForm(product) : html`LOADING...`}
    ${Link({href:'/products', text:'Products'})}
  `
}

export default ProductsNew