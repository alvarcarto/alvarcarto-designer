import React from 'react';
import { Icon } from 'antd';
import _ from 'lodash';
import ImageLoader from 'react-imageloader';
import { createPlacementImageUrl } from '../util';

function preloader() {
  return <Icon type="loading" />;
}

class PosterPreview extends React.Component {
  render() {
    const mapItem = _.extend({}, this.props.mapItem, { resizeToWidth: 800 });

    return (
      <ImageLoader
        className="PosterPreview"
        src={createPlacementImageUrl('no-flowers-in-blue-black-frame', mapItem)}
        preloader={preloader}
      >
        <Icon type="frown-o" />
        <span className="PosterPreview__fail-text">Preview error</span>
      </ImageLoader>
    );
  }
}

export default PosterPreview;
