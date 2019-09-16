import React from 'react';
import { Icon } from 'antd';
import ImageLoader from 'react-imageloader';
import { createPosterPreviewUrl } from '../util';

function preloader() {
  return <Icon type="loading" />;
}

class PosterPreview extends React.Component {
  render() {
    return (
      <ImageLoader
        className="PosterPreview"
        src={createPosterPreviewUrl(this.props.mapItem)}
        preloader={preloader}
      >
        <Icon type="frown-o" />
        <span className="PosterPreview__fail-text">Preview error</span>
      </ImageLoader>
    );
  }
}

export default PosterPreview;
