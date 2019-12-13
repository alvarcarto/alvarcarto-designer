import React from 'react';
import { Tooltip } from 'antd';
import { connect } from 'react-redux';
import { setMapView } from '../actions';
import CONST from '../constants';
import config from '../config';
import { getStyle } from '../util';
import AlvarMapOverlay from './AlvarMapOverlay';
import {
  Map as LeafletMap,
  TileLayer as LTileLayer
} from 'react-leaflet';

const userAgent = navigator.userAgent.toLowerCase();
const IS_ANDROID = userAgent.indexOf('android') > -1;

class AlvarMap extends React.Component {
  state = {
    userHasClicked: false,
    tooltipVisible: false,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { mapItem } = this.props;
    const nextMapItem = nextProps.mapItem;

    if (mapItem.size !== nextMapItem.size ||
        mapItem.orientation !== nextMapItem.orientation ||
        this.props.dimensions.width !== nextProps.dimensions.width ||
        this.props.dimensions.height !== nextProps.dimensions.height
    ) {
      if (this.refs.lMap) {
        setTimeout(() => this.refs.lMap.leafletElement.invalidateSize(), 0);
      }
    }
  }

  componentDidMount() {
    const { mapItem } = this.props;

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
  }

  render() {
    const { props } = this;
    const { mapItem } = props;

    const style = getStyle(mapItem.mapStyle);
    const mapCssStyle = {
      width: props.dimensions.width,
      height: props.dimensions.height,
    };

    const tooltipContent = <span onClick={this._onTooltipClick} className="AlvarMap__tooltip">
      You can move the map by dragging it!
      <img className="AlvarMap__drag-icon" src={`${config.PUBLIC_URL}/assets/drag-icon.svg`} alt=""/>
    </span>;

    let className = 'AlvarMap';
    if (mapItem.material === 'plywood') {
      className += ' AlvarMap--plywood';
    }
    if (props.hideShadows) {
      className += ' AlvarMap--no-shadows';
    }
    if (props.disabled) {
      className += ' AlvarMap--disabled';
    } else {
      className += ' grabbable';
    }

    const shouldShowTooltip = this.state.tooltipVisible && mapItem.material === 'paper';
    return (
      <div onClick={this._onMapClick} className={className} style={mapCssStyle}>
        <Tooltip visible={shouldShowTooltip} title={tooltipContent}>
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
  }

  _renderOverlay = (mapItem) => {
    if (this.props.hideOverlay) {
      return null
    } else if (mapItem.labelsEnabled) {
      return <AlvarMapOverlay mapItem={mapItem} />
    }

    const minSide = Math.min(this.props.dimensions.width, this.props.dimensions.height);
    const borderPadding = Math.floor(CONST.EMPTY_MAP_PADDING_FACTOR * minSide);

    return <div className="AlvarMap__empty-overlay" style={{ border: `${borderPadding}px solid white` }}></div>;
  };

  _onMapClick = () => {
    this.setState(() => ({ userHasClicked: true }));
  };

  _onTooltipClick = () => {
    this.setState(() => ({ tooltipVisible: false }));
  };

  _renderLeaflet = (style) => {
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
  };

  _dispatchMapView = () => {
    const map = this.refs.lMap.leafletElement;
    const latLng = map.getCenter();

    this.props.dispatch(setMapView({
      center: { lat: latLng.lat, lng: latLng.lng },
      bounds: this._getMapBounds(),
      zoom: map.getZoom(),
    }));
  };

  _getMapBounds = () => {
    const map = this.refs.lMap.leafletElement;
    const bounds = map.getBounds();
    const southWest = bounds.getSouthWest();
    const northEast = bounds.getNorthEast();
    return {
      southWest: { lat: southWest.lat, lng: southWest.lng },
      northEast: { lat: northEast.lat, lng: northEast.lng },
    };
  };
}

export default connect(state => ({ globalState: state }))(AlvarMap);
