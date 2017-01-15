import React from 'react';
import './Alert.css';

const Alert = (props) => <div className="Alert">
  {props.children}
</div>;

export default Alert;