import React from 'react';
import { Icon } from 'antd';
import _ from 'lodash';
import ImageLoader from 'react-imageloader';
import { createPlacementImageUrl } from '../util';

function preloader() {
  return <Icon type="loading" />;
}

function getPortraitPreview(material) {
  return material === 'plywood'
    ? 'plywood-white-shelf-square'
    : 'no-flowers-in-blue-black-frame';
}

function getLandscapePreview(material) {
  return material === 'plywood'
    ? 'plywood-white-shelf-landscape'
    : 'white-paper-gray-bg-landscape';
}

class PosterPreview extends React.Component {
  render() {
    const mapItem = _.extend({}, this.props.mapItem, { resizeToWidth: 800 });
    const previewId = mapItem.orientation === 'landscape'
      ? getLandscapePreview(mapItem.material)
      : getPortraitPreview(mapItem.material);

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
