import React, { Component } from 'react';

import {
  StyleSheet
} from 'react-native';

import TWebView from './webview';

class Weather extends Component {
  render() {
    return (<TWebView isWeather={true} />);
  }
}

const styles = StyleSheet.create({

});

module.exports = Weather;