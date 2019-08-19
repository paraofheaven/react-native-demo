import React, { Component } from 'react';
import TWebView from './webview';

const nearByURL = 'http://jr.ly.com/webapps/loan/market/h5/portal/index?wvc3=1&channelKey=tcins1#/';

class ToiletPage extends Component {
  render() {
    return (<TWebView url={nearByURL} isMargin={20} />);
  }
}

module.exports = ToiletPage;

