import { createContext, useState, useEffect } from "../u-react/index.js"
import * as serviceProducts from '../services/products.js'

const productsContext = createContext(90)

const ProductsProvider = (children) => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    console.log("effect executed!")
    const products = await serviceProducts.get()
    setProducts(products)

    return () => console.log("effect cleaned!")
  }, [products])
 
  return productsContext.Provider({ 
    value: { products, setProducts }, 
    children 
  })
}

export { productsContext, ProductsProvider }
