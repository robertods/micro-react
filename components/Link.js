import { html, navigate } from '../u-react/index.js';

const Link = ({ href, text }) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(href);
  }

  return html`
    <a href="${href}" @click=${handleClick}>
      ${text}
    </a>
  `
}

export default Link
