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
    const previewId = this.props.mapItem.material === 'plywood'
      ? 'plywood-white-shelf-square'
      : 'no-flowers-in-blue-black-frame';

    return (
      <ImageLoader
        className="PosterPreview"
        src={createPlacementImageUrl(previewId, mapItem)}
        preloader={preloader}
      >
        <Icon type="frown-o" />
        <span className="PosterPreview__fail-text">Preview error</span>
      </ImageLoader>
    );
  }
}

export default PosterPreview;
