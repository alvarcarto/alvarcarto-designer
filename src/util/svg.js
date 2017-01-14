import React from 'react';
import _ from 'lodash';

module.exports.PortraitIcon = (props) => <svg className="PortraitIcon"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="0 0 50 70"
  style={{ enableBackground: 'new 0 0 50 70'}}
>
  <rect
    style={_.merge({
      fill: 'rgba(0, 0, 0, 0)',
      stroke: 'black',
      strokeWidth: 2,
    }, props.style)}
    x="0.5"
    y="0.5"
    width="49"
    height="69"
  />
</svg>;

module.exports.LandscapeIcon = (props) => <svg className="LandscapeIcon"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="0 0 70 50"
  style={{ enableBackground: 'new 0 0 70 50'}}
>
  <rect
    style={_.merge({
      fill: 'rgba(0, 0, 0, 0)',
      stroke: 'black',
      strokeWidth: 2,
    }, props.style)}
    x="0.5"
    y="0.5"
    width="69"
    height="49"
  />
</svg>;

module.exports.TickIcon = (props) => <svg className="TickIcon"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="0 0 32 32"
  style={{ enableBackground: 'new 0 0 32 32' }}
>
  <g style={_.merge({strokeLinecap: 'square', strokeWidth: 3, stroke: '#108ee9'}, props.style)}>
    <line x1="5" y1="18" x2="11.5" y2="24.5"/>
    <line x1="11.5" y1="24.5" x2="27" y2="9"/>
  </g>
</svg>;

module.exports.PosterIcon = (_props) => {
  const props = _.merge({
    fill: 'rgba(0, 0, 0, 0)',
    stroke: 'black',
    strokeWidth: 1,
  }, _props);

  console.log(props)
  return <svg className="PosterIcon"
    width={props.width}
    height={props.height}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox={`0 0 ${props.width} ${props.height}`}
    style={{ enableBackground: `new 0 0 ${props.width} ${props.height}`}}
  >
    <rect
      style={_.pick(props, ['fill' ,'stroke' ,'strokeWidth'])}
      x={props.strokeWidth / 2}
      y={props.strokeWidth / 2}
      width={props.width - props.strokeWidth}
      height={props.height - props.strokeWidth}
    />
  </svg>;
}