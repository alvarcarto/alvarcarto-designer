import React from 'react';
import { Tooltip } from 'antd';
import L from 'leaflet';
window.L = L;
import { connect } from 'react-redux';
import { setMapView } from '../actions';
import CONST from '../constants';
import config from '../config';
import { posterSizeToPixels, getStyle } from '../util';
import AlvarMapOverlay from './AlvarMapOverlay';
import {
  Map as LeafletMap,
  TileLayer as LTileLayer
} from 'react-leaflet';

const userAgent = navigator.userAgent.toLowerCase();
const IS_ANDROID = userAgent.indexOf('android') > -1;

const AlvarMap = React.createClass({
  getInitialState() {
    return {
      userHasClicked: false,
      tooltipVisible: false,
    };
  },

  componentWillReceiveProps(nextProps) {
    const { mapItem } = this.props;
    const nextMapItem = nextProps.mapItem;

    if (mapItem.size !== nextMapItem.size ||
        mapItem.orientation !== nextMapItem.orientation) {
      if (this.refs.lMap) {
        setTimeout(() => this.refs.lMap.leafletElement.invalidateSize(), 0);
      }
    }

    if (this.props.scaleZoom !== nextProps.scaleZoom) {
      // Ugly hack very very ugly, to fix:
      // We are using our fork of Leaflet which implements this
      // https://github.com/Leaflet/Leaflet/issues/2795
      L.DomEvent.setContainerScale(nextProps.scaleZoom);
    }
  },

  componentDidMount() {
    const { mapItem } = this.props;
    L.DomEvent.setContainerScale(this.props.scaleZoom);

    if (!mapItem.mapBounds) {
      this._dispatchMapView();
    }

    if (!this.props.hideTips) {
      // TODO: This is called after component is unmounted
      setTimeout(() => {
        if (!this.state.userHasClicked) {
          this.setState(() => ({ tooltipVisible: true }));

          setTimeout(() => {
            this.setState(() => ({ tooltipVisible: false }));
          }, 15000);
        }
      }, 15000);
    }
  },

  render() {
    const { props } = this;
    const { mapItem } = props;

    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
    const style = getStyle(mapItem.mapStyle);
    const mapCssStyle = {
      width: dimensions.width,
      height: dimensions.height,
    };

    const tooltipContent = <p onClick={this._onTooltipClick} className="AlvarMap__tooltip">
      You can move the map by dragging it!
      <img className="AlvarMap__drag-icon" src={`${config.PUBLIC_URL}/assets/drag-icon.svg`} alt=""/>
    </p>;

    let className = 'AlvarMap';
    if (props.hideShadows) {
      className += ' AlvarMap--no-shadows';
    }
    if (props.disabled) {
      className += ' AlvarMap--disabled';
    } else {
      className += ' grabbable';
    }

    return (
      <div onClick={this._onMapClick} className={className} style={mapCssStyle}>
        <Tooltip visible={this.state.tooltipVisible} title={tooltipContent}>
          <div className="AlvarMap__container">
            {
              this._renderLeaflet(style)
            }

            {
              this._renderOverlay(mapItem)
            }
          </div>
        </Tooltip>
      </div>
    );
  },

  _renderOverlay(mapItem) {
    if (this.props.hideOverlay) {
      return null
    } else if (mapItem.labelsEnabled) {
      return <AlvarMapOverlay mapItem={mapItem} />
    }

    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
    const minSide = Math.min(dimensions.width, dimensions.height);
    const borderPadding = Math.floor(CONST.EMPTY_MAP_PADDING_FACTOR * minSide);

    return <div className="AlvarMap__empty-overlay" style={{ border: `${borderPadding}px solid white` }}></div>;
  },

  _onMapClick() {
    this.setState(() => ({ userHasClicked: true }));
  },

  _onTooltipClick() {
    this.setState(() => ({ tooltipVisible: false }));
  },

  _renderLeaflet(style) {
    const { mapItem } = this.props;

    const props = {};
    if (IS_ANDROID) {
      props.onViewportChanged = this._dispatchMapView;
    } else {
      props.onMoveEnd = this._dispatchMapView;
    }

    return <LeafletMap
      ref="lMap"
      zoomControl={false}
      zoomDelta={0.25}
      zoomSnap={0.25}
      center={mapItem.mapCenter}
      zoom={mapItem.mapZoom}
      minZoom={CONST.MAP_MIN_ZOOM}
      maxZoom={CONST.MAP_MAX_ZOOM}
      maxBounds={[{lat: 85, lng: -179}, {lat: -85, lng: 179}]}
      {...props}
    >
      <LTileLayer zoomOffset={1} tileSize={128} url={style.url} />
    </LeafletMap>;
  },

  _dispatchMapView() {
    const map = this.refs.lMap.leafletElement;
    const latLng = map.getCenter();

    this.props.dispatch(setMapView({
      center: { lat: latLng.lat, lng: latLng.lng },
      bounds: this._getMapBounds(),
      zoom: map.getZoom(),
    }));
  },

  _getMapBounds() {
    const map = this.refs.lMap.leafletElement;
    const bounds = map.getBounds();
    const southWest = bounds.getSouthWest();
    const northEast = bounds.getNorthEast();
    return {
      southWest: { lat: southWest.lat, lng: southWest.lng },
      northEast: { lat: northEast.lat, lng: northEast.lng },
    };
  }
});

export default connect(state => ({ globalState: state }))(AlvarMap);
