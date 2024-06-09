import { html, useState, useEffect } from '../../_framework/u-react.js'
import Link from '../../components/Link.js'

const products = () => {
  
  console.log("render productos")
  const [count, setCount] = useState(100)

  useEffect(() => {
    console.log("effect executed!")
    return () => console.log("effect cleaned!")
  }, [count])

  useEffect(() => {
    console.log("effect executed 2!")
    return () => console.log("effect cleaned 2!")
  }, [])

  return html`
    <h1>Productos</h1>
    <button @click=${e=>setCount(count - 1)}>-</button>
    <div>${count}</div>
    <button @click=${e=>setCount(count + 1)}>+</button>
    ${Link({href:'/', text:'Home'})}
  `
}

export default products