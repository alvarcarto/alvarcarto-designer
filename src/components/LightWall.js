import React from 'react';
import ReactDOM from 'react-dom';
import autoprefix from 'auto-prefixer';
import _ from 'lodash';
import { connect } from 'react-redux';
import AlvarMap from './AlvarMap';
import { Icon, Switch, Button, Menu, Dropdown } from 'antd';
import config from '../config';
import { getPlacementImages } from '../util/api';
import { setMapView } from '../actions';
import {
  posterSizeToPhysicalDimensions,
  posterSizeToPixels,
  createPosterImageUrl,
  getQueryParameterByName,
  createPlacementImageUrl,
} from '../util';

// Padding which should be left unfilled when scaling poster to light wall
const POSTER_PADDING_WIDTH = 45;
const POSTER_PADDING_HEIGHT = 45;

const MULTI = getQueryParameterByName('multiMode') === 'true';

const LightWall = React.createClass({
  getInitialState() {
    return {
      zoom: this._calculateZoom(),
      debouncedOnWindowResize: _.debounce(this._onWindowResize, 100),
      container: null,
      showPreview: false,
      showOverlay: true,
      placementImages: [],
    };
  },

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
      mapItem.orientation !== nextMapItem.orientation ||
      globalState.cart.length !== nextGlobalState.cart.length;


    if (hasChanged) {
      this.setState({
        zoom: this._calculateZoom(nextGlobalState),
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
    const scalerZoom = Math.max(this.state.zoom, 0.15);

    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
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
                    const dimensions = posterSizeToPixels(m.size, m.orientation);
                    const totalHalf = sumOfPosterWidths / 2;
                    const half = dimensions.width / 2;
                    const translateX = -totalHalf + half + widthSum - dimensions.width;

                    const disabled = globalState.editCartItem !== i;
                    return <div className="LightWall__map-positioner" style={autoprefix({transform: `translateX(${translateX}px)`})}>
                      <AlvarMap key={i} mapItem={m} disabled={disabled} scaleZoom={scalerZoom} hideOverlay={!this.state.showOverlay} hideShadows hideTips />
                    </div>
                  })
                : <AlvarMap mapItem={mapItem} scaleZoom={scalerZoom} />
            }
          </div>

          {
            MULTI
              ? null
              : <div className="LightWall__zoom-container" style={zoomContainerCss}>
                  <div className="leaflet-control-zoom leaflet-bar leaflet-control">
                    <a className="leaflet-control-zoom-in" title="Zoom in" role="button" aria-label="Zoom in" onClick={this._onZoomInClick}>+</a>
                    <a className="leaflet-control-zoom-out" title="Zoom out" role="button" aria-label="Zoom out" onClick={this._onZoomOutClick}>-</a>
                  </div>
                </div>
          }
          {
            MULTI
              ? null
              : <div className="LightWall__width-label">
                  <div className="LightWall__width-label-line"></div>
                  <p>{physicalDimensions.width} {physicalDimensions.unit}</p>
                </div>
          }

          {
            MULTI
              ? null
              : <div className="LightWall__height-label">
                  <div className="LightWall__height-label-line"></div>
                  <p>{physicalDimensions.height} {physicalDimensions.unit}</p>
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
            <Icon type="heart" /> Map data by <a href="http://www.openstreetmap.org/">OpenStreetMaps contributors</a>︎
          </p>
        </div>

        { this._renderDebugMenu(globalState) }
      </div>
    );
  },

  _renderDebugMenu(globalState) {
    if (!globalState.debug && !MULTI && !globalState.showCartDownload) {
      return null
    }

    return [
      <div className="LightWall__debug-menu-top">
        {
          globalState.debug
            ? <div className="LightWall__debug-menu-section">
                { this._renderPlacementMenu() }
                <Button type="primary" onClick={this._downloadImage}>Download poster PNG</Button>
                <Button type="primary" onClick={this._downloadCartAsJson}>Download cart JSON</Button>
                <a id="downloadJson" style={{ display: 'none'}}></a>

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
        ? <div className="LightWall__debug-menu-bottom">
            <div className="LightWall__debug-menu-section">
              <Switch defaultChecked={false} onChange={this._onPreviewChange} />
              <span>Render preview (apiKey required)</span>
            </div>
          </div>
        : null
    ]
  },

  _renderPlacementMenu() {
    const menu = (
      <Menu className="LightWall__debug-placement-menu">
        {_.map(this.state.placementImages, (im) =>
          <Menu.Item key={im.id}>
            <a rel="noopener noreferrer" onClick={() => this._downloadPlacement(im.id)}>{im.label}</a>
          </Menu.Item>
        )}
      </Menu>
    );

    return <Dropdown overlay={menu}>
      <Button type="primary" style={{ marginLeft: 8 }}>
        Download placement <Icon type="down" />
      </Button>
    </Dropdown>
  },

  _onWindowResize() {
    this.setState({
      zoom: this._calculateZoom(),
    });
  },

  _calculateZoom(globalState) {
    if (!this.state || !this.state.container) {
      return 1;
    }

    if (!globalState) {
      globalState = this.props.globalState;
    }

    const mapItem = globalState.cart[globalState.editCartItem];
    const dimensions = posterSizeToPixels(mapItem.size, mapItem.orientation);
    const containerWidth = this.state.container.offsetWidth - (POSTER_PADDING_WIDTH * 2);
    const containerHeight = this.state.container.offsetHeight - (POSTER_PADDING_HEIGHT * 2);

    const width = MULTI ? this._calculateSumOfPostersWidths(globalState) : dimensions.width;
    const fitRatio = calculateAspectRatioFit(
      width,
      dimensions.height,
      containerWidth,
      containerHeight
    );

    // Limit zoom always to maximum 1.0
    return Math.min(1, fitRatio);
  },

  // Calculates sum of all poster widths in pixels
  _calculateSumOfPostersWidths(globalState, nFirstItems) {
    const cart = nFirstItems ? _.take(globalState.cart, nFirstItems) : globalState.cart;

    const totalWidth = _.reduce(cart, (memo, item) => {
      return memo + posterSizeToPixels(item.size, item.orientation).width;
    }, 0);
    return totalWidth;
  },

  _onZoomInClick(e) {
    e.preventDefault();

    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];
    this.props.dispatch(setMapView({
      zoom: mapItem.mapZoom + 0.25,
    }));
  },

  _onZoomOutClick(e) {
    e.preventDefault();

    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];
    this.props.dispatch(setMapView({
      zoom: mapItem.mapZoom - 0.25,
    }));
  },

  _onPreviewChange(checked) {
    this.setState({
      showPreview: checked,
    });
  },

  _onShowOverlayChange(checked) {
    this.setState({
      showOverlay: checked,
    });
  },

  _downloadCartAsJson() {
    const obj = this.props.globalState.cart;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj, null, 2));
    const dlAnchorElem = document.getElementById('downloadJson');
    dlAnchorElem.setAttribute('href', dataStr);

    const timestamp = (new Date()).toISOString();
    dlAnchorElem.setAttribute('download', `alvar-${timestamp}.json`);
    dlAnchorElem.click();
  },

  _downloadImage() {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];
    const newUrl = `${createPosterImageUrl(mapItem)}&apiKey=${globalState.apiKey}&download=true`;
    window.open(newUrl, '_blank');
  },

  _downloadPlacement(id) {
    const { globalState } = this.props;
    const mapItem = globalState.cart[globalState.editCartItem];
    const newUrl = `${createPlacementImageUrl(id, mapItem)}&apiKey=${globalState.apiKey}&download=true`;
    console.log('newUrl', newUrl)
    window.open(newUrl, '_blank');
  },
});

/**
 * Conserve aspect ratio of the orignal region. Useful when shrinking/enlarging
 * images to fit into a certain area.
 *
 * @param {Number} srcWidth Source area width
 * @param {Number} srcHeight Source area height
 * @param {Number} maxWidth Fittable area maximum available width
 * @param {Number} maxHeight Fittable area maximum available height
 * @return {Number} ratio to multiple src dimensions to get perfect fit
 */
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  return Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
}

export default connect(state => ({ globalState: state }))(LightWall);
