import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import AlvarMap from './AlvarMap';
import { Icon } from 'antd';
import config from '../config';
import { setMapView } from '../actions';
import { posterSizeToPhysicalDimensions, posterSizeToPixels } from '../util';

const LightWall = React.createClass({
  getInitialState() {
    return {
      zoom: this._calculateZoom(),
      debouncedOnWindowResize: _.debounce(this._onWindowResize, 100),
      container: null,
    };
  },

  componentDidMount() {
    window.addEventListener('resize', this.state.debouncedOnWindowResize);
    this.setState({
      container: ReactDOM.findDOMNode(this.refs.container),
    }, () => this.setState({
      zoom: this._calculateZoom(),
    }));
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.state.debouncedOnWindowResize);
  },

  componentWillReceiveProps(nextProps) {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];

    const nextGlobalState = nextProps.globalState;
    const nextMapItem = nextGlobalState.cart[nextGlobalState.editCartItem];

    const hasChanged =
      mapItem.size !== nextMapItem.size ||
      mapItem.orientation !== nextMapItem.orientation;

    if (hasChanged) {
      this.setState({
        zoom: this._calculateZoom(nextMapItem),
      });
    }
  },

  render() {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];

    const physicalDimensions = posterSizeToPhysicalDimensions(
      mapItem.size,
      mapItem.orientation
    );
    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);

    return (
      <div ref="container" className="LightWall noselect">
      <div className="LightWall__map-container">
          <div className="LightWall__wire-container">
            <img className="LightWall__clip1" src="clip.png" />
            <img className="LightWall__clip2" src="clip.png" />
            <div className="LightWall__wire1"></div>
            <div className="LightWall__wire2"></div>
          </div>

          <div className="LightWall__scaler" style={{ zoom: this.state.zoom }}>
            <AlvarMap />
          </div>

          <div className="LightWall__zoom-container">
            <div className="leaflet-control-zoom leaflet-bar leaflet-control">
              <a className="leaflet-control-zoom-in" href="#" title="Zoom in" role="button" aria-label="Zoom in" onClick={this._onZoomInClick}>+</a>
              <a className="leaflet-control-zoom-out" href="#" title="Zoom out" role="button" aria-label="Zoom out" onClick={this._onZoomOutClick}>-</a>
            </div>
          </div>

          <div className="LightWall__width-label">
            <div className="LightWall__width-label-line"></div>
            <p>{physicalDimensions.width} {physicalDimensions.unit}</p>
          </div>

          <div className="LightWall__height-label">
            <div className="LightWall__height-label-line"></div>
            <p>{physicalDimensions.height} {physicalDimensions.unit}</p>
          </div>
        </div>

        <div className="LightWall__logo">
          <a href="http://alvarcarto.com">
            <img
              src={`${config.PUBLIC_URL}/assets/logo.svg`}
              alt="Alvar Carto"
            />
          </a>
        </div>

        <div className="LightWall__credits">
          <p>
            <Icon type="heart" /> Map data by <a href="http://www.openstreetmap.org/">OpenStreetMaps contributors</a>︎
          </p>
        </div>
      </div>
    );
  },

  _onWindowResize() {
    this.setState({
      zoom: this._calculateZoom(),
    });
  },

  _calculateZoom(mapItem) {
    if (!this.state || !this.state.container) {
      return 1;
    }

    if (!mapItem) {
      const { globalState } = this.props;
      mapItem = globalState.cart[globalState.editCartItem];
    }

    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
    const maxPosterSide = Math.max(dimensions.width, dimensions.height);

    const containerWidth = this.state.container.offsetWidth;
    const containerHeight = this.state.container.offsetHeight;
    const minContainerSide = Math.min(containerWidth, containerHeight) - 150;

    if (minContainerSide > maxPosterSide) {
      return 1;
    }

    if (dimensions.width > dimensions.height) {
      return minContainerSide / dimensions.width;
    } else {
      return minContainerSide / dimensions.height;
    }
  },

  _onZoomInClick() {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];
    this.props.dispatch(setMapView({
      zoom: mapItem.mapZoom + 1,
    }));
  },

  _onZoomOutClick() {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];
    this.props.dispatch(setMapView({
      zoom: mapItem.mapZoom - 1,
    }));
  },
});

export default connect(state => ({ globalState: state }))(LightWall);
