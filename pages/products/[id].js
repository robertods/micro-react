import { html, useState, useEffect } from '../../u-react/index.js'
import Link from '../../components/Link.js'
import { getById } from '../../services/products.js'

const ProductsNew = (id) => {

  const [product, setProduct] = useState(null)
  
  useEffect(async () => {
    const resp = await getById(id)
    setProduct(resp)
  }, [])

  return html`
    <h1>Product</h1>
    ${product
      ? html`
        <p>${product.name}</p>
        <p>${product.price}</p>
        <p>${product.category}</p>`
      : html`LOADING...`
    }
    
    ${Link({href:'/products', text:'Products'})}
  `
}

export default ProductsNew