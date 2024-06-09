import { html, navigate, useState } from '../_framework/u-react.js';

const Link = ({ href, text }) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(href);
  };

  const [points, setPoints]= useState(2)

  return html`
    <a href="${href}" @click=${handleClick}>
      ${text} (${points})
    </a>
    <button @click=${e => setPoints(points + 1)}>+</button>
  `;
};

export default Link;
