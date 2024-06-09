import { html, useState, useEffect } from '../../u-react/index.js'
import Link from '../../components/Link.js'
import ProductList from '../../components/ProductList.js'
import * as serviceProducts from '../../services/products.js'

const Products = () => {
  
  console.log("render productos")
  const [products, setProducts] = useState([])

  useEffect(async () => {
    console.log("effect executed!")
    const products = await serviceProducts.get()
    setProducts(products)

    return () => console.log("effect cleaned!")
  }, [products])

  return html`
    <h1>Productos</h1>
    ${ProductList({products})}
    ${Link({href:'/', text:'Home'})}
  `
}

export default Products