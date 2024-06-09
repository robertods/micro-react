import { globalContext } from '../context/GlobalContext.js';
import { html, navigate, useContext } from '../u-react/index.js';

const Link = ({ href, text }) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(href);
  }

  const { value1, setValue1 } = useContext(globalContext)

  return html`
    <a href="${href}" @click=${handleClick}>
      ${text}
    </a>
    <button @click=${e => setValue1(value1 + 2)}>+</button>
  `
}

export default Link
