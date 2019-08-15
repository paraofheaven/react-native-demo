import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import Util from './../util';
import TWebView from '../webview';

class List extends Component {
  constructor(props) {
    super(props);
  }

  _showDetail(url, title) {
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

  renderItem = (rowData) => {
    return (
      <TouchableOpacity style={[styles.item, styles.row]} onPress={this._showDetail.bind(this, rowData.url, rowData.title)}>
        <View>
          <Image style={styles.img} source={{ uri: rowData.img }} resizeMode="cover" />
        </View>
        <View style={styles.text}>
          <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
          <Text style={styles.name}>{rowData.time.split("T")[0]} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <FlatList style={styles.container}
        renderItem={this.renderItem}
      >
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = List;