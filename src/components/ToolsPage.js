import _ from 'lodash';
import React from 'react';
import { Input } from 'antd';
import Footer from './Footer';

const physicalDims = [
  { size: '30x40cm', width: 30, height: 40 },
  { size: '50x70cm', width: 50, height: 70 },
  { size: '70x100cm', width: 70, height: 100 },
  { size: '12x18inch', width: 12, height: 18 },
  { size: '18x24inch', width: 18, height: 24 },
  { size: '24x36inch', width: 24, height: 36 },
];

function isNumberAsString(str) {
  if (str.length <= 0) {
    return false;
  }

  const reg = /^-?[0-9]*(\.[0-9]*)?$/;
  return reg.test(str);
}

function aspectRatioDifference(w1, h1, w2, h2) {
  return Math.abs((w1 / h1) - (w2 / h2));
}

function getClosestSize(width, height) {
  const sorted = _.sortBy(physicalDims, d => aspectRatioDifference(d.width, d.height, width, height));
  return sorted[0];
}

class ToolsPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: '',
      height: '',
    };
  }

  render() {
    console.log('thisstate', this.state)
    const width = isNumberAsString(this.state.width)
      ? Number(this.state.width)
      : null
    const height = isNumberAsString(this.state.height)
      ? Number(this.state.height)
      : null

    console.log('width', width)
    console.log('width', height)

    const closestMatch = getClosestSize(width, height);
    const aspectRatioInput = width / height;
    const aspectRatioMatch = closestMatch.width / closestMatch.height;
    const ratioDiff = aspectRatioDifference(width, height, closestMatch.width, closestMatch.height);

    return (
      <div className="ToolsPage">
        <div className="ToolsPage__content">
          <h1>Tools</h1>

          <p>
            Tools for debugging or internal usage.
          </p>

          <h2>Placement ratio finder</h2>
          <p>Input the dimensions of the placement poster, and the closest size match will be
            printed as a result.
          </p>
          <div>
            <Input className="ToolsPage__input" placeholder="Width" value={this.state.width} name="width" onChange={this.onNumberChange} />
            <span className="ToolsPage__x">x</span>
            <Input className="ToolsPage__input" placeholder="Height" value={this.state.height} name="height" onChange={this.onNumberChange} />

            {
              width === null || height === null
                ? null
                : (
                  <div className="ToolsPage__results">
                    <p>Aspect ratio for input: {aspectRatioInput.toFixed(3)}</p>
                    <p>Aspect ratio for closest match ({closestMatch.size}): {aspectRatioMatch.toFixed(3)}</p>
                    {
                      ratioDiff < 0.03
                        ? <p>The closest match for dimensions is: {closestMatch.size}. The ratio difference is: {ratioDiff.toFixed(3)}</p>
                        : <p>The difference is too large: {ratioDiff.toFixed(3)}. Image will look distorted.</p>
                    }
                  </div>
                )
            }
          </div>

          <Footer />
        </div>
      </div>
    );
  }

  onNumberChange = (e) => {
    const { name, value } = e.target;
    if (isNumberAsString(value) || value === '' || value === '-') {
      this.setState((state) => _.extend({}, state, { [name]: value }));
    }
  }
}

export default ToolsPage;
