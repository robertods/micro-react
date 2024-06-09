import { html, useReducer, useState } from '../../u-react/index.js'
import Link from '../../components/Link.js'
import { useContext } from '../../u-react/useContext.js'
import { globalContext } from '../../context/GlobalContext.js'

const home = () => {
  
  console.log("render home")
  const [count, setCount] = useState(10)

  const { value1, setValue1 } = useContext(globalContext)

  const reducer1 = (state, action) => {
    if(action.type === "increment"){
      return { age: state.age + 1}
    }
    if(action.type === "decrement"){
      return { age: state.age - 1}
    }
  }
  const [myState, dispatch] = useReducer(reducer1, { age: 45 })

  return html`
    <h1>Home</h1>
    <button @click=${e=>setCount(count - 1)}>-</button>
    <div>${count}</div>
    <button @click=${e=>setCount(count + 1)}>+</button>
    <p @click=${e => setValue1(value1 - 1)}>Valor global: ${value1}</p>
    <div>${myState.age}</div>
    <button @click=${() => dispatch({ type: 'increment'})}>age++</button>
    <button @click=${() => dispatch({ type: 'decrement'})}>age--</button>
    ${Link({href:'/products', text:'Productos'})}
    ${Link({href:'/help', text:'Help'})}
  `
}

export default home
