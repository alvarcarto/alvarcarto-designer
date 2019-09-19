import React from 'react';
import ButtonLink from './ButtonLink'

const icons = {
  plus: <svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="plus-icon">
            <circle id="Oval-1" cx="10.5" cy="10.5" r="9.5"></circle>
            <path d="M10.5,6.5 L10.5,14.5" id="Line" strokeLinecap="square"></path>
            <path d="M14.5,10.5 L6.5,10.5" id="Line" strokeLinecap="square"></path>
        </g>
    </g>
  </svg>,
  minus: <svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="minus-icon">
            <circle id="Oval-1" cx="10.5" cy="10.5" r="9.5"></circle>
            <path d="M14.5,10.5 L6.5,10.5" id="Line" strokeLinecap="square"></path>
        </g>
    </g>
  </svg>,
};

const IconButton = (props) => {
  let className = 'IconButton';
  if (props.disabled) {
    className += ' IconButton--disabled';
  }
  if (props.className) {
    className += ` ${props.className}`;
  }
  if (props.theme) {
    className += ` IconButton--${props.theme}`;
  }

  return <ButtonLink onClick={props.onClick} className={className}>
    {icons[props.type]}{
      props.children
        ? <span className="IconButton__text">{props.children}</span>
        : null
    }
  </ButtonLink>;
}

export default IconButton;
