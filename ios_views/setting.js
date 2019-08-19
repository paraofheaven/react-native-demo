import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  AlertIOS,
  ScrollView,
  StyleSheet,
  NavigatorIOS,
  TouchableOpacity,
} from 'react-native';

import Help from './setting/help';
import Detail from './setting/detail';
import Tips from './setting/tips';
import Util from './util';

class SettingView extends Component {

  _showDetail() {
    this.props.navigator.push({
      component: Detail,
      title: '功能介绍',
      barTintColor: '#fff',
    });
  }

  _showHelp() {
    this.props.navigator.push({
      component: Help,
      title: '帮助中心',
      barTintColor: '#fff',
      navigationBarHidden: false,
      translucent: false,
    });
  }

  _showTips() {
    this.props.navigator.push({
      component: Tips,
      title: '服务条款',
      barTintColor: '#fff',
      navigationBarHidden: false,
      translucent: false,
    });
  }

  _showAbout() {
    AlertIOS.alert('如有问题,联系', 'paraofheaven@foxmail.com', [{ text: '确认' }]);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bg}>
          <Text style={styles.text1}>设置</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.conhead}>
            <Image style={styles.icon} source={require('./assets/logo.png')} resizeMode="contain" />
            <Text style={[styles.text2, { fontSize: 13 }]}>v1.0.0</Text>
          </View>
          <TouchableOpacity onPress={this._showDetail.bind(this)}>
            <View style={[styles.item, { borderTopWidth: Util.pixel }]}>
              <Text style={styles.text2}>功能介绍</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showHelp.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text2}>帮助中心</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showTips.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text2}>服务条款</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showAbout.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text2}>关于</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    backgroundColor: '#FFF',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold'
  },
  conhead: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  icon: {
    width: 88,
    height: 100
  },
  text2: {
    fontSize: 15,
    marginLeft: 10,
    color: '#7E7F7E'
  },
  item: {
    height: 50,
    backgroundColor: '#fff',
    borderBottomWidth: Util.pixel,
    borderColor: '#ccc',
    justifyContent: 'center'
  }
});

class Setting extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: SettingView,
          title: '设置',
          navigationBarHidden: true,
        }}
      ></NavigatorIOS>
    );
  }
}

module.exports = Setting;