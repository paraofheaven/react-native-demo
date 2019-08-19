import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Util from '../util';
import List from './list';

class Recommend extends Component {

  constructor(props) {
    super(props);
  }

  _showList() {
    this.props.navigator.push({
      component: List,
      barTintColor: '#fff',
      title: this.props.title,
      navigationBarHidden: false,
      translucent: false,
    });
  }

  _renderList() {
    const { dataSource } = this.props;
    if (!dataSource || !dataSource.length) {
      return;
    }
    return (
      <View style={[styles.row, { marginTop: 10 }]}>
        {dataSource.map((item, index) => {
          return (
            <View style={styles.itemwap} key={index}>
              <TouchableOpacity>
                <View style={styles.shadow}>
                  <Image style={styles.topicImg} source={{ uri: item.img }} resizeMode="cover" />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.remen}>
        <View>
          <Text style={styles.bigText}>{this.props.title}</Text>
        </View>
        {this._renderList()}
        <TouchableOpacity style={styles.tjTQ} onPress={this._showList.bind(this)}>
          <Text style={styles.tjTQText}>查看全部 &gt; </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  remen: {
    margin: 10,
  },
  bigText: {
    fontSize: 17,
    fontWeight: '300',
    marginBottom: 5
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  itemwap: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '23.5%',
    marginRight: 5,
    marginBottom: 10,
  },
  shadow: {
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset: { width: 1 * Util.pixel, height: Util.pixel }
  },
  topicImg: {
    height: 100,
    marginRight: 5
  },
  title: {
    fontSize: 13,
    color: '#4C4C4C'
  },
  tjTQ: {
    marginTop: 10,
    marginBottom: -5
  },
  tjTQText: {
    fontWeight: '300',
    fontSize: 15,
    color: '#7D7D81'
  },
});

module.exports = Recommend;