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
import Recommend from './read/recommend';

class ReadView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      refreshing: false,
      topicData: [],
      hotTopic: [],
    }
  }

  componentDidMount() {
    this.timer = null;
    this._fetchData();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  _fetchData(callback) {
    this.timer = setTimeout(() => {
      this.setState({
        isShow: true,
        refreshing: false,
        topicData: [{
          title: '房司令',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.ly.com',
        }, {
          title: '点点',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/ss.png',
          url: 'http://www.baidu.com',
        }],
        hotTopic: [{
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.ly.com',
        }, {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.baidu.com',
        }, {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.ly.com',
        }, {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.baidu.com',
        }, {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.ly.com',
        }, {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.baidu.com',
        }, {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.ly.com',
        }, {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.baidu.com',
        }],
        other: [{
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.baidu.com',
        }, {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.baidu.com',
        },
        {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.baidu.com',
        },
        {
          title: '如果公司抛弃了你，你将何去何从',
          img: 'https://file.40017.cn/css40017cnproduct/jinrong/files/i/baoxian/hybrid/detail/cc-1.png',
          url: 'http://www.baidu.com',
        }]
      });
    }, 1000);
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this._fetchData();
  }

  render() {
    const { refreshing, isShow, topicData, hotTopic, other } = this.state;
    return (
      <View style={styles.container}>
        <Search navigator={this.props.navigator} />
        {
          isShow ? (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this._onRefresh.bind(this)}
              ></RefreshControl>
            }
            style={[styles.container, { paddingTop: 20 }]}
          >
            <Topic data={topicData} navigator={this.props.navigator} type="manager"></Topic>
            <HairLine></HairLine>
            <Recommend title="热门推荐" dataSource={hotTopic} navigator={this.props.navigator} />
            <HairLine></HairLine>
            <Recommend title="清新一刻" dataSource={other} navigator={this.props.navigator} />
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