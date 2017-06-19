/* eslint-disable */

import Raven from 'raven-js';
import WebFont from 'webfontloader';
import config from './config';

if (config.NODE_ENV === 'production') {
  // Install Sentry client
  Raven.config('https://2456dddf26df432bae36dd00ea1d2a45@sentry.io/148773').install();

  // Hotjar
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:437392,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');

  // Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-89893838-2', 'auto');
  ga('send', 'pageview');
}

// Google fonts
WebFont.load({
  google: {
    families: [
      'Fira Sans Extra Condensed:400,700',
      'Source Sans Pro:200,400,700',
      'Roboto Condensed:300,400,700',
      'Josefin Sans:300,400,700',
      'Pacifico:300,400,700',
      'Amatic SC:300,400,700',
    ],
  },
});
