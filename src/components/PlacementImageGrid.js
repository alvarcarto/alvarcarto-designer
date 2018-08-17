import React from 'react';
import _ from 'lodash';
import { Icon, Tooltip, Button } from 'antd'

const PlacementImageGrid = (props) => <div className="PlacementImageGrid">
  <a className="PlacementImageGrid__close" onClick={props.onClose}>
    <Icon type="close" />
  </a>

  <div className="PlacementImageGrid__dim" />

  <div className="PlacementImageGrid__images">
    {_.map(props.images, im =>
      <Tooltip key={im.id} title={im.label}>
        <div className="PlacementImageGrid__image-container">
          <img src={im.smallPhotoUrl} alt="" />
          <div className="PlacementImageGrid__image-menu">
            <a onClick={() => props.onImageClick(im.id)}>Full size</a>
            <a onClick={() => props.onImageClick(im.id, { resizeToWidth: 1200 })}>Medium size</a>
          </div>
        </div>
      </Tooltip>
    )}
  </div>
</div>;

export default PlacementImageGrid;
