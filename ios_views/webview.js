// import { WebView } from 'react-native-webview';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView,
} from 'react-native';

class TWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      isMargin: this.props.isMargin,
      isShowErrorPage: false,
    }
  }

  _loadError() {
    this.setState({
      isShowErrorPage: true,
    });
  }

  render() {
    const { url, isShowErrorPage, isMargin } = this.state;
    return (
      <View style={styles.container}>
        {isShowErrorPage ? <View style={styles.textView}>
          <Text style={styles.text}>不好意思,请检查网络连接情况或者报告错误</Text>
        </View> :
          <WebView
            style={[styles.container, { marginTop: isMargin || -20 }]}
            startInLoadingState
            onError={this._loadError.bind(this)}
            source={{ uri: url }}>
          </WebView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = TWebView;