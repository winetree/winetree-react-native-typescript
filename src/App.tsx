import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import Header from './components/Header';
import styles from './styles';
import ReqCondition from './model/req/ReqCondition';
import Api from './utilities/Api';

export default class App extends Component {
  public render() {
    return (
      <Header headerText='Albums' />
    );
  }
}