import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import ResAlbum from '../model/res/ResAlbum';

class AlbumList extends Component {

  public componentDidMount(){
    axios.get<ResAlbum[]>('https://rallycoding.herokuapp.com/api/music_albums').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  public render(){
    return (
      <View>
        <Text>Album list</Text>
      </View>
    );
  }
}

export default AlbumList;