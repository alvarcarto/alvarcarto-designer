import React from 'react';
import _ from 'lodash';
import { Icon, Tooltip } from 'antd'
import UnstyledButton from './UnstyledButton';

const PlacementImageGrid = (props) => <div className="PlacementImageGrid">
  <UnstyledButton className="PlacementImageGrid__close" onClick={props.onClose}>
    <Icon type="close" />
  </UnstyledButton>

  <div className="PlacementImageGrid__dim" onClick={props.onClose} />

  <div className="PlacementImageGrid__images">
    {_.map(props.images, im =>
      <Tooltip key={im.id} title={im.label}>
        <div className="PlacementImageGrid__image-container">
          <img src={im.smallPhotoUrl} alt="" />
          <div className="PlacementImageGrid__image-menu">
            <UnstyledButton onClick={() => props.onImageClick(im.id)}>Full size</UnstyledButton>
            <UnstyledButton onClick={() => props.onImageClick(im.id, { resizeToWidth: 1200 })}>Medium size</UnstyledButton>
          </div>
        </div>
      </Tooltip>
    )}
  </div>
</div>;

export default PlacementImageGrid;
