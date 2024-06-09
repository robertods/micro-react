import { html, useState } from '../../u-react/index.js'
import Link from '../../components/Link.js'

const home = () => {
  
  console.log("render home")
  const [count, setCount] = useState(10)

  return html`
    <h1>Home</h1>
    <button @click=${e=>setCount(count - 1)}>-</button>
    <div>${count}</div>
    <button @click=${e=>setCount(count + 1)}>+</button>
    ${Link({href:'/products', text:'Productos'})}
    ${Link({href:'/help', text:'Help'})}
  `
}

export default home
