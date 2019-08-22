import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import List from './list';

class Category extends Component {

  _showList(title, code = 'it') {
    this.props.navigator.push({
      component: List,
      barTintColor: '#fff',
      title: title,
      passProps: {
        type: code
      },
      navigationBarHidden: false,
      translucent: false,
    });
  }

  render() {
    const { data } = this.props;
    let first = [];
    let second = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        const Item = (
          <TouchableOpacity style={styles.categoryTopic} key={key} onPress={this._showList.bind(this, element.title, element.code)}>
            <Text style={styles.title1}>{element.text}</Text>
          </TouchableOpacity>
        );
        if (key < 2) {
          first.push(Item);
        } else {
          second.push(Item);
        }
      }
    }
    return (
      <View>
        <View>
          <Text style={[styles.bigText, { marginLeft: 10 }]}>分类</Text>
        </View>
        <View style={[styles.row, { marginTop: 10 }]}>
          {first}
        </View>
        <View style={[styles.row, { marginTop: 10 }]}>
          {second}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 17,
    fontWeight: '300',
    marginBottom: 5
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'nowrap',
    alignContent: 'flex-start',
  },
  categoryTopic: {
    flexShrink: 0,
    flexGrow: 0,
    flexBasis: '50%',
  },
  title1: {
    fontSize: 17,
    fontWeight: '300'
  }
});

module.exports = Category;