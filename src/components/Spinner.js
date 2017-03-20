import React from 'react';

const Spinner = (props) => <div className={props.dark ? 'Spinner Spinner--dark' : 'Spinner' }>
  <div className="Spinner__bounce1"></div>
  <div className="Spinner__bounce2"></div>
  <div className="Spinner__bounce3"></div>
</div>;

export default Spinner;
