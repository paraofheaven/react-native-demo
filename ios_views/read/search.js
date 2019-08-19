import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import Util from '../util';

import List from './list';

class Search extends Component {

  _onSubmitEditing() {
    this.props.navigator.push({
      component: List,
      barTintColor: '#fff',
      title: '互联网资讯',
      passProps: {
        type: 'it'
      },
      navigationBarHidden: false,
      translucent: false,
    });
  }

  _onChangeText = () => {
  }

  render() {
    return (
      <View style={{ height: 70, borderBottomWidth: Util.pixel, borderColor: '#ccc' }}>
        <TextInput
          style={styles.search}
          placeholder="搜索"
          placeholderTextColor="#494949"
          autoFocus={true}
          returnKeyType="search"
          onSubmitEditing={this._onSubmitEditing.bind(this)}
          onChangeText={this._onChangeText}
        ></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    marginLeft: 10,
    marginRight: 10,
    height: 35,
    borderWidth: 2 * Util.pixel,
    borderColor: '#ccc',
    borderRadius: 3,
    marginTop: 25,
    paddingLeft: 10,
    fontSize: 15
  }
});

module.exports = Search;