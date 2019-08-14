import React, { Component } from 'react';
import TWebView from './webview';

const nearByURL = 'http://jr.ly.com/webapps/loan/market/h5/portal/index?env=inte&wvc3=1&channelKey=tcfx#/';

class ToiletPage extends Component {
  render() {
    return (<TWebView url={nearByURL} />);
  }
}

module.exports = ToiletPage;

