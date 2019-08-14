import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import Util from './util';

import Search from './read/search';

class ReadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      refreshing: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Search navigator={this.props.navigator} />
        <ActivityIndicator
          animating={true}
          size="large"
          style={[{ height: 80 }]}
        ></ActivityIndicator>
      </View>
    );

  }
}

class Read extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: ReadView,
          title: '阅读',
          navigationBarHidden: true
        }}
      >
      </NavigatorIOS>
    );
  }
}

class HairLine extends Component {
  render() {
    return (
      <View style={styles.hairline}></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hairline: {
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    marginTop: 20,
    marginBottom: 10
  }
});

module.exports = Read;