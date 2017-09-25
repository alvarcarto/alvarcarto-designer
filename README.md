# Alvar Carto Designer

*https://design.alvarcarto.com*

Map designer and order UI for Alvar Carto.

**Quick intro:**

* React+Redux single-page app initialized with [create-react-app](https://github.com/facebookincubator/create-react-app)
* https://ant.design/ as UI component library
* Redux state is normal JS objects, no Immutable
* Router is totally custom
* Promises for async
* Maps are rendered with Leaflet, tiles are self-hosted
* Google Maps API used for geocoding requests
* Error tracking with Sentry
* Analytics with GA and Hotjar


Needs these services to run properly:

* https://github.com/kimmobrunfeldt/alvarcarto-order-service
* https://github.com/kimmobrunfeldt/alvarcarto-tile-service
* For debugging, also: https://github.com/kimmobrunfeldt/alvarcarto-render-service

## Development

To see documentation how to do common tasks in this project, see [Create React App documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Get started

* `npm install`
* Setup env vars

    * `cp .env.sample .env`
    * Fill details, see [config.js](src/config.js) for all settings

* Start order service locally
* Start tile service locally, or point frontend to QA
* `npm start`
