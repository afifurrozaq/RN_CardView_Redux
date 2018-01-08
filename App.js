/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
export default class AwesomeProject extends Component {
    render() {
      return (
        <View>
          <Header name="Albums"/>
          <AlbumList />
        </View>
      );
    }   
  }


AppRegistry.registerComponent('AwesomeProject', () => App)