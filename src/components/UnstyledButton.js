import React from 'react';

const UnstyledButton = (props) => {
  let className = 'UnstyledButton';

  if (props.className) {
    className += ` ${props.className}`
  }

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}

export default UnstyledButton;