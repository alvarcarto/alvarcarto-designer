import React from 'react';
import UnstyledButton from './UnstyledButton'

const ButtonLink = (props) => {
  let className = 'ButtonLink';

  if (props.className) {
    className += ` ${props.className}`
  }

  return (
    <UnstyledButton {...props} className={className}>
      {props.children}
    </UnstyledButton>
  );
}

export default ButtonLink;