import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import ResAlbum from '../model/res/ResAlbum';
import log from '../utilities/Logger';

interface State {
  data: ResAlbum[] | null;
}

class AlbumList extends Component {

  /**
   * Default State
   */
  public state : State = {
    data : null
  };

  public componentDidMount() {
    axios.get<ResAlbum[]>('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        this.setState({
          data: res.data
        });
        log.debug(res);
      }).catch(err => {
        log.debug(err);
      });
  }

  public render() {
    const { data } = this.state;
    return (
      <View>
        <Text>Album list</Text>
        {
          data ? data.map(item => 
            <Text key={item.title}>lkj</Text>
            ) : 
            <Text>로딩중</Text>
          }
      </View>
    );
  }
}

export default AlbumList;