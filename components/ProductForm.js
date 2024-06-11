import { html, navigate } from '../u-react/index.js'
import { add, edit } from '../services/products.js'

const ProductForm = ({ id='', name='', price='', category=''}) => html`
  <form @submit=${handleSubmit}>
    <input type="hidden" name="id" value="${id}" />
    <label>
      Name <input name="name" value="${name}" />
    </label>
    <label>
      Price <input name="price" value="${price}" />
    </label>
    <label>
      Category 
      <select name="category" value="${category}">
        <option value="1">Gadget</option>
        <option value="2">Other</option>
      </select>
    </label>
    <button>Save</button>
  </form>
`

async function handleSubmit(e) {
  e.preventDefault()
  const form = new FormData(e.target)
  const product = { 
    name: form.get('name'), 
    price: Number(form.get('price')), 
    category: parseInt(form.get('category'))
  }
  
  const id = form.get('id') 
  const resp = id
    ? await edit(id, product) 
    : await add(product)

  console.log(resp)
  navigate('/products')
}

export default ProductForm