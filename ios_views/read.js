import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Util from './util';

import Search from './read/search';
import Topic from './read/topic';

class ReadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      refreshing: false,
      topicData: [],
    }
  }

  componentDidMount() {
    this.timer = null;
    this._fetchData();
  }

  componentWillUnmount(){
    clearTimeout(this.timer);
  }

  _fetchData(callback) {
    // var self = this;
    // Util.get('http://123.57.39.116:3000/data/read?type=config', function (data) {
    //   if (data.status) {
    //     let obj = data.data;
    //     self.setState({
    //       isShow: true,
    //       recommendTopic: obj.recommendTopic,
    //       hotTopic: obj.hotTopic,
    //       category: obj.category,
    //       other: obj.other,
    //       refreshing: false,
    //     });
    //   } else {
    //     alert('服务异常,正在紧急修复,请耐心等待');
    //   }
    // }, function (err) {
    //   alert(err);
    //   alert('服务异常,正在紧急修复,请耐心等待2');
    // });
    this.timer = setTimeout(() => {
      this.setState({
        isShow: true,
        refreshing: false,
        topicData: [{
          img: 'http://pic5.40017.cn/01/000/ee/45/rBLkBlsFFWeAasvtAAAObyHg0Zg613.png',
        }, {
          img: 'http://pic5.40017.cn/01/001/ee/44/rBLkBVsFE5uAf74FAAAMOzbDrDg567.png',
        }],
      });
    }, 3000);
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this._fetchData();
  }

  render() {
    const { refreshing, isShow } = this.state;
    return (
      <View style={styles.container}>
        <Search navigator={this.props.navigator} />
        {
          isShow ? (<ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this._onRefresh.bind(this)}
              ></RefreshControl>
            }
            style={[styles.container, { paddingTop: 20 }]}
          >
            <Topic data={this.state.topicData} navigator={this.props.navigator} type="manager"></Topic>
            <HairLine></HairLine>
          </ScrollView>) :
            (<ActivityIndicator
              animating={true}
              size="large"
              style={[{ height: 80 }]}
            ></ActivityIndicator>)
        }

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