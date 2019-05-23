import React, { Component } from 'react';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import { View } from 'react-native';

export default class App extends Component {
  public render() {
    return (
      <View>
        <Header headerText='Albums' />
        <AlbumList />
      </View>
    );
  }
}