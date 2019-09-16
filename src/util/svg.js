import React from 'react';
import _ from 'lodash';
import CONST from '../constants';

export const PortraitIcon = (props) => <svg className="PortraitIcon"
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

export const LandscapeIcon = (props) => <svg className="LandscapeIcon"
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

export const TickIcon = (props) => <svg className="TickIcon"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="0 0 32 32"
  style={{ enableBackground: 'new 0 0 32 32' }}
>
  <g style={_.merge({strokeLinecap: 'square', strokeWidth: 3, stroke: CONST.PRIMARY_COLOR}, props.style)}>
    <line x1="5" y1="18" x2="11.5" y2="24.5"/>
    <line x1="11.5" y1="24.5" x2="27" y2="9"/>
  </g>
</svg>;

export const PosterIcon = (_props) => {
  const props = _.merge({
    fill: 'rgba(0, 0, 0, 0)',
    stroke: 'black',
    strokeWidth: 1,
  }, _props);

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

export const TruckIcon = (props) => <svg
  className="TruckIcon"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="-249 244.1 100 87"
  style={{enableBackground: 'new -249 244.1 100 87'}}
>
  <path d="M-157.5,247.2h-38.8c-4,0-7.3,3.2-7.3,7.2v0.3h-20.5c-2.6,0-5.1,1.3-6.5,3.6l-15.5,24.4c-1.2,1.8-1.8,3.9-1.8,6.1v23.6
    c0,4,3.3,7.3,7.3,7.3h2c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2h-2c-1.8,0-3.3-1.5-3.3-3.3v-23.6c0-1.4,0.4-2.7,1.1-3.9l15.5-24.4
    c0.7-1.1,1.8-1.7,3.1-1.7h22.5c1.1,0,2-0.9,2-2l0-2.3c0-1.8,1.5-3.3,3.3-3.3h38.8c1.8,0,3.3,1.5,3.3,3.3v57.8c0,1.8-1.5,3.3-3.3,3.3
    h-7.1c-0.9-5.7-5.7-9.9-11.4-9.9c-6.4,0-11.6,5.2-11.5,11.6c0,0,0,0,0,0c0.1,6.3,5.2,11.5,11.5,11.6c5.5,0,10.2-3.9,11.3-9.2h7.2
    c4,0,7.3-3.3,7.3-7.3v-57.8C-150.2,250.5-153.4,247.2-157.5,247.2z M-175.9,324.8c-4.1-0.1-7.4-3.5-7.5-7.6c0-4.2,3.4-7.6,7.5-7.6
    c4.1,0.1,7.4,3.5,7.5,7.6C-168.3,321.4-171.7,324.8-175.9,324.8z M-209.9,266h-9.9c-1.1,0-2.2,0.6-2.8,1.5l-11,17.2
    c-1,1.5-0.5,3.6,1,4.6c0.5,0.3,1.2,0.5,1.8,0.5h20.9c1.8,0,3.3-1.5,3.3-3.3v-17.3C-206.6,267.5-208.1,266-209.9,266z M-210.6,285.8
    h-18.9l10.1-15.8h8.8V285.8z M-220.3,305.6c-6.4,0-11.5,5.2-11.5,11.6c0.1,6.3,5.2,11.5,11.5,11.6c5.5,0,10.2-3.9,11.3-9.2h14.7
    c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2h-14.6C-209.8,309.9-214.6,305.7-220.3,305.6z M-220.3,324.8c-4.1-0.1-7.4-3.5-7.5-7.6
    c0-4.2,3.4-7.6,7.5-7.6c4.1,0.1,7.4,3.5,7.5,7.6C-212.8,321.4-216.2,324.8-220.3,324.8z"/>
</svg>;