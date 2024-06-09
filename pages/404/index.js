import { html } from '../../u-react/index.js'
import Link from '../../components/Link.js'

const notFound = () => {
  
  console.log("render 404")

  return html`
    <h1>Not Found</h1>
    ${Link({href:'/', text:'Back'})}
  `
}

export default notFound