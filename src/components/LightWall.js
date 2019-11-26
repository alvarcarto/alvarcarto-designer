import React from 'react';
import ReactDOM from 'react-dom';
import autoprefix from 'auto-prefixer';
import _ from 'lodash';
import { connect } from 'react-redux';
import AlvarMap from './AlvarMap';
import PlacementImageGrid from './PlacementImageGrid';
import { Icon, Switch, Button } from 'antd';
import config from '../config';
import { getPlacementImages } from '../util/api';
import { setMapView } from '../actions';
import { getPosterPhysicalDimensions } from 'alvarcarto-common'
import {
  posterSizeToPixels,
  createPosterImageUrl,
  getQueryParameterByName,
  createPlacementImageUrl,
  calculateAspectRatioFit,
} from '../util';
import UnstyledButton from './UnstyledButton';
import { cartItemToMapItem } from '../util/cart-state';

// Padding which should be left unfilled when scaling poster to light wall
const MIN_POSTER_PADDING_WIDTH = 50;
const MIN_POSTER_PADDING_HEIGHT = 50;

const MULTI = getQueryParameterByName('multiMode') === 'true';

class LightWall extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      zoom: this._calculateZoom(),
      debouncedOnWindowResize: _.debounce(this._onWindowResize, 100),
      container: null,
      showPreview: false,
      showOverlay: true,
      placementImages: [],
      showPlacementGrid: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.state.debouncedOnWindowResize);
    this.setState({
      container: ReactDOM.findDOMNode(this.refs.container),
    }, () => this.setState({
      zoom: this._calculateZoom(),
    }));

    if (this.props.globalState.debug) {
      getPlacementImages()
        .then((res) => {
          this.setState({ placementImages: res.data })
        })
        .catch(err => {
          throw err
        })
    }
  }

  UNSAFE_componentWillUnmount() {
    window.removeEventListener('resize', this.state.debouncedOnWindowResize);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { globalState } = this.props;
    const nextGlobalState = nextProps.globalState;
    const item = globalState.cart[globalState.editCartItem];

    let hasChanged = false;
    if (!item) {
      hasChanged = true;
    } else {
      const mapItem = cartItemToMapItem(item);
      const nextItem = nextGlobalState.cart[nextGlobalState.editCartItem];
      const nextMapItem = cartItemToMapItem(nextItem);

      hasChanged =
        globalState.cart.length === 0 ||
        mapItem.size !== nextMapItem.size ||
        mapItem.orientation !== nextMapItem.orientation ||
        globalState.cart.length !== nextGlobalState.cart.length;
    }

    if (hasChanged) {
      this.setState({
        zoom: this._calculateZoom(nextGlobalState),
      });
    }
  }

  render() {
    const { globalState } = this.props;
    if (globalState.cart.length === 0) {
      return <div ref="container" className="LightWall noselect"></div>
    }

    const item = globalState.cart[globalState.editCartItem];
    const mapItem = cartItemToMapItem(item);

    const physicalDimensions = getPosterPhysicalDimensions(
      mapItem.size,
      mapItem.orientation
    );
    const scalerZoom = Math.max(this.state.zoom, 0.15);

    const containerArea = this._getContainerArea()
    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation, containerArea);
    const mapContainerCss = {
      // http://stackoverflow.com/questions/10858523/css-transform-with-element-resizing
      width: dimensions.width * scalerZoom,
      height: dimensions.height * scalerZoom,
    };
    const scalerCss = {
      transform: `scale(${scalerZoom})`,
    };
    const wireScalerCss = {
      transform: `scale(${dimensions.clipScale})`,
      // 10px from left in the clip image is about the center of the clip
      // transform relative to that point
      transformOrigin: '10px 90%',
    };
    const padding = 0.032 * scalerZoom * Math.max(dimensions.width, dimensions.height);
    const zoomContainerCss = {
      top: `${padding}px`,
      left: `${padding}px`,
    };

    const sumOfPosterWidths = this._calculateSumOfPostersWidths(globalState);

    return (
      <div ref="container" className="LightWall noselect">
        <div className="LightWall__map-container" style={autoprefix(mapContainerCss)}>
          {
            MULTI
              ? null
              : <div className="LightWall__wire-container">
                  <img className="LightWall__clip1" src="clip.png" alt="" style={autoprefix(wireScalerCss)} />
                  <img className="LightWall__clip2" src="clip.png" alt="" style={autoprefix(wireScalerCss)} />
                  <div className="LightWall__wire1"></div>
                  <div className="LightWall__wire2"></div>
                </div>
          }

          <div className="LightWall__scaler" style={autoprefix(scalerCss)}>
            {
              MULTI
                ? _.map(globalState.cart, (m, i) => {
                    const widthSum = this._calculateSumOfPostersWidths(globalState, i + 1);
                    const mapItem = cartItemToMapItem(m);
                    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
                    const totalHalf = sumOfPosterWidths / 2;
                    const half = dimensions.width / 2;
                    const translateX = -totalHalf + half + widthSum - dimensions.width;

                    const disabled = globalState.editCartItem !== i;
                    return <div className="LightWall__map-positioner" style={autoprefix({transform: `translateX(${translateX}px)`})}>
                      <AlvarMap dimensions={dimensions} key={i} mapItem={m} disabled={disabled} scaleZoom={scalerZoom} hideOverlay={!this.state.showOverlay} hideShadows hideTips />
                    </div>
                  })
                : <AlvarMap dimensions={dimensions} mapItem={item} scaleZoom={scalerZoom} hideTips={globalState.debug} />
            }
          </div>

          {
            MULTI
              ? null
              : <div className="LightWall__zoom-container" style={zoomContainerCss}>
                  <div className="leaflet-control-zoom leaflet-bar leaflet-control">
                    <UnstyledButton className="leaflet-control-zoom-in" title="Zoom in" role="button" aria-label="Zoom in" onClick={this._onZoomInClick}>+</UnstyledButton>
                    <UnstyledButton className="leaflet-control-zoom-out" title="Zoom out" role="button" aria-label="Zoom out" onClick={this._onZoomOutClick}>-</UnstyledButton>
                  </div>
                </div>
          }
          {
            MULTI
              ? null
              : <div className="LightWall__width-label">
                  <div className="LightWall__width-label-line"></div>
                  <span>{physicalDimensions.width} {physicalDimensions.unit}</span>
                </div>
          }

          {
            MULTI
              ? null
              : <div className="LightWall__height-label">
                  <div className="LightWall__height-label-line"></div>
                  <span>{physicalDimensions.height} {physicalDimensions.unit}</span>
                </div>
          }

          {
            this.state.showPreview
              ? <img
                  className="LightWall__preview-image"
                  src={`${createPosterImageUrl(mapItem)}&apiKey=${globalState.apiKey || config.REACT_APP_RENDER_API_KEY}`}
                  alt=""
                />
              : null
          }
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
            <Icon type="heart" theme="filled" /> Map data by <a href="http://www.openstreetmap.org/">OpenStreetMaps contributors</a>︎
          </p>
        </div>

        { this._renderDebugMenu(globalState) }

        {
          this.state.showPlacementGrid
            ? <PlacementImageGrid images={this.state.placementImages} onImageClick={this._downloadPlacement} onClose={() => this.setState({ showPlacementGrid: false })} />
            : null }
      </div>
    );
  }

  _renderDebugMenu = (globalState) => {
    if (!globalState.debug && !MULTI && !globalState.showCartDownload) {
      return null
    }

    return [
      <div key="menu-top" className="LightWall__debug-menu-top">
        {
          globalState.debug
            ? <div className="LightWall__debug-menu-section">
                { this._renderPlacementMenu() }
                <Button type="primary" onClick={this._downloadImage}>Download poster PNG</Button>
                <Button type="primary" onClick={this._downloadCartAsJson}>Download cart JSON</Button>
                { /* Used to generate a JSON download. Needed for browser safety restrictions. */ }
                <a // eslint-disable-line
                  href=""
                  id="downloadJson"
                  style={{ display: 'none'}}>
                  Hidden
                </a>

                <div className="LightWall__debug-menu-bottom">

                </div>
              </div>
            : null
        }
        {
          MULTI
            ? <div className="LightWall__debug-menu-section">
                <Switch checked={this.state.showOverlay} onChange={this._onShowOverlayChange} />
                <span>Show overlay</span>
              </div>
            : null
        }
      </div>,

      globalState.debug
        ? <div key="menu-bottom" className="LightWall__debug-menu-bottom">
            <div className="LightWall__debug-menu-section">
              <Switch defaultChecked={false} onChange={this._onPreviewChange} />
              <span>Render preview (apiKey required)</span>
            </div>
          </div>
        : null
    ]
  };

  _renderPlacementMenu = () => {
    return <Button type="primary" style={{ marginLeft: 8 }} onClick={() => this.setState({ showPlacementGrid: true })}>
      Download placement
    </Button>
  };

  _onWindowResize = () => {
    this.setState({
      zoom: this._calculateZoom(),
    });
  };

  _calculateZoom = (globalState) => {
    const cartLength = _.get(globalState, 'cart.length', 0)
    if (!this.state || !this.state.container || cartLength === 0) {
      return 1;
    }

    if (!globalState) {
      globalState = this.props.globalState;
    }

    const containerArea = this._getContainerArea()
    const item = globalState.cart[globalState.editCartItem];
    const mapItem = cartItemToMapItem(item);
    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation, containerArea);

    const width = MULTI ? this._calculateSumOfPostersWidths(globalState) : dimensions.width;
    const fitRatio = calculateAspectRatioFit(
      width,
      dimensions.height,
      containerArea.width,
      containerArea.height,
    );

    // Limit zoom always to maximum 1.0
    return Math.min(1, fitRatio);
  };

  _getContainerArea = () => {
    const containerOffsets = {
      width: _.get(this.state, 'container.offsetWidth', 500),
      height: _.get(this.state, 'container.offsetHeight', 500),
    }

    const paddingWidth = Math.max(containerOffsets.width * 0.1, MIN_POSTER_PADDING_WIDTH)
    const paddingHeight = Math.max(containerOffsets.height * 0.1, MIN_POSTER_PADDING_HEIGHT)
    return {
      width: containerOffsets.width - (paddingWidth * 2),
      height: containerOffsets.height - (paddingHeight * 2)
    }
  };

  // Calculates sum of all poster widths in pixels
  _calculateSumOfPostersWidths = (globalState, nFirstItems) => {
    const cart = nFirstItems ? _.take(globalState.cart, nFirstItems) : globalState.cart;

    const totalWidth = _.reduce(cart, (memo, item) => {
      return memo + posterSizeToPixels(item.customisation.size, item.customisation.orientation).width;
    }, 0);
    return totalWidth;
  };

  _onZoomInClick = (e) => {
    e.preventDefault();

    const { globalState } = this.props;
    const item = globalState.cart[globalState.editCartItem];
    this.props.dispatch(setMapView({
      zoom: item.customisation.mapZoom + 0.25,
    }));
  };

  _onZoomOutClick = (e) => {
    e.preventDefault();

    const { globalState } = this.props;
    const item = globalState.cart[globalState.editCartItem];
    this.props.dispatch(setMapView({
      zoom: item.customisation.mapZoom - 0.25,
    }));
  };

  _onPreviewChange = (checked) => {
    this.setState({
      showPreview: checked,
    });
  };

  _onShowOverlayChange = (checked) => {
    this.setState({
      showOverlay: checked,
    });
  };

  _downloadCartAsJson = () => {
    const obj = this.props.globalState.cart;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj, null, 2));
    const dlAnchorElem = document.getElementById('downloadJson');
    dlAnchorElem.setAttribute('href', dataStr);

    const prefix = obj.length > 1
      ? 'multiple-items'
      : `${obj[0].customisation.labelHeader}`;

    const timestamp = (new Date()).toISOString();
    dlAnchorElem.setAttribute('download', `${prefix.toLowerCase()}-${timestamp}.json`);
    dlAnchorElem.click();
  };

  _downloadImage = () => {
    const { globalState } = this.props;
    const item = globalState.cart[globalState.editCartItem];
    const newUrl = `${createPosterImageUrl(item)}&apiKey=${globalState.apiKey}&download=true`;
    window.open(newUrl, '_blank');
  };

  _downloadPlacement = (id, opts = {}) => {
    const { globalState } = this.props;
    const item = _.merge({}, globalState.cart[globalState.editCartItem], {
      resizeToWidth: opts.resizeToWidth
    });
    const newUrl = `${createPlacementImageUrl(id, item)}&apiKey=${globalState.apiKey}&download=true`;
    window.open(newUrl, '_blank');
  };
}

export default connect(state => ({ globalState: state }))(LightWall);
