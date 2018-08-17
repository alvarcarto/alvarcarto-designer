import React from 'react';
import _ from 'lodash';
import { Icon, Tooltip } from 'antd'

const PlacementImageGrid = (props) => <div className="PlacementImageGrid">
  <a className="PlacementImageGrid__close" onClick={props.onClose}>
    <Icon type="close" />
  </a>

  <div className="PlacementImageGrid__dim" />

  <div className="PlacementImageGrid__images">
    {_.map(props.images, im =>
      <Tooltip title={im.label}>
        <img onClick={() => props.onImageClick(im.id)} key={im.id} src={im.smallPhotoUrl} alt="" />
      </Tooltip>
    )}
  </div>
</div>;

export default PlacementImageGrid;
