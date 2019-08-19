import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import TWebView from '../webview';
import List from './list';

class Topic extends Component {

  constructor(props) {
    super(props);
  }

  _showDetail(title, url) {
    this.props.navigator.push({
      component: TWebView,
      title: title,
      barTintColor: '#fff',
      passProps: {
        url: url,
        isMargin: 1
      }
    });
  }

  _showList() {
    this.props.navigator.push({
      component: List,
      title: '推荐专题',
      barTintColor: '#fff',
      navigationBarHidden: false,
      translucent: false,
      passProps: {
        type: 'manager'
      }
    });
  }

  render() {
    const data = this.props.data;
    const data0 = data[0];
    const data1 = data[1];
    return (
      <View style={styles.tj}>
        <View style={styles.tjTitle}>
          <Text style={styles.bigText}>推荐专题</Text>
        </View>
        <View style={[styles.row, styles.tjTopic]}>
          <TouchableOpacity style={[styles.tjTopicItem, { marginRight: 5 }]} onPress={this._showDetail.bind(this, data0.title, data0.url)}>
            <Image source={{ uri: data0.img }} resizeMode="stretch" style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tjTopicItem, { marginLeft: 5 }]} onPress={this._showDetail.bind(this, data1.title, data1.url)}>
            <Image source={{ uri: data1.img }} resizeMode="stretch" style={styles.img} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.tjTQ} onPress={this._showList.bind(this)}>
          <Text style={styles.tjTQText}>查看同期专题 &gt; </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tj: {
    marginTop: -5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: -5,
  },
  tjTitle: {

  },
  bigText: {
    fontSize: 17,
    fontWeight: '300',
    marginBottom: 5
  },
  row: {
    flexDirection: 'row'
  },
  tjTopic: {
    marginTop: 10
  },
  tjTopicItem: {
    height: 100,
    flex: 1,
    borderRadius: 5
  },
  tjTQ: {
    marginTop: 10
  },
  tjTQText: {
    fontWeight: '300',
    fontSize: 15,
    color: '#7D7D81'
  },
  img: {
    height: 100, borderRadius: 5
  }
});

module.exports = Topic;