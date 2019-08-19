import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import Util from './../util';
import TWebView from '../webview';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dataSource: [{
          id: 1,
          img: 'http://pic5.40017.cn/01/000/ee/45/rBLkBlsFFWeAasvtAAAObyHg0Zg613.png',
          title: '房司令',
          time: '2019-08-12',
          url: 'https://mtransfer.ulinkcredit.com/balanceapp.html#/guide?popCode=n5n4a2646cmq',
        }, {
          id: 2,
          img: 'http://pic5.40017.cn/01/001/ee/44/rBLkBVsFE5uAf74FAAAMOzbDrDg567.png',
          title: '点点通',
          time: '2019-08-14',
          url: 'https://bt.songjindaikuan.com/wap/LandingSjdkn?utm_source=s51kaguan6&register_channel=s51kaguan6'
        }]
      });
    }, 2000);
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

  renderItem = ({ item: rowData, index }) => {
    const { dataSource } = this.state;
    return (
      <TouchableOpacity style={[styles.item, EStyleSheet.child(styles, 'row', index, dataSource.length)]} onPress={this._showDetail.bind(this, rowData.url, rowData.title)}>
        <View>
          <Image style={styles.img} source={{ uri: rowData.img }} resizeMode="cover" />
        </View>
        <View style={styles.text}>
          <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
          <Text style={styles.name}>{rowData.time} </Text>
        </View>
      </TouchableOpacity>
    );
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    const { dataSource } = this.state;
    return (
      <FlatList style={[styles.container, { marginTop: -50 }]}
        data={dataSource}
        keyExtractor={this._keyExtractor}
        renderItem={this.renderItem}
      >
      </FlatList>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
  },
  item: {
    height: 80,
    borderBottomWidth: Util.pixel,
    borderBottomColor: '#ccc',
  },
  row: {
    flexDirection: 'row'
  },
  'row:last-child': {
    borderBottomWidth: 0,
  },
  img: {
    height: 60,
    width: 60,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: Util.pixel,
    borderRadius: 3,
    borderColor: '#fff'
  },
  text: {
    marginLeft: 7
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    width: Util.size.width - 80
  },
  name: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 10
  }
});

EStyleSheet.build({});

module.exports = List;