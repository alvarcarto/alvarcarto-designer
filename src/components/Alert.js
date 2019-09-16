import React from 'react';
import { Icon } from 'antd';

const ICONS = {
  info: 'info-circle-o',
  success: 'check-circle-o',
  warning: 'exclamation-circle-o',
  error: 'close-circle-o',
}

const Alert = (props) => {
  let className = 'Alert';
  if (props.className) {
    className += ` ${props.className}`;
  }

  if (props.type) {
    className += ` Alert--${props.type}`;
  }

  const type = props.type ? props.type : 'info'
  const iconType = props.iconType
    ? props.iconType
    : ICONS[type]

  return (
    <div className={className}>
      <Icon type={iconType} />
      <p>{props.children}</p>
    </div>
  );
}

export default Alert;