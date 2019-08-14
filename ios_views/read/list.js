import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import Util from './../util';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = List;