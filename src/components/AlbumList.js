import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state={ album: [] };
    componentWillMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ album: response.data }));
    }   

    renderAlbum(){
        return this.state.album.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        console.log(this.state);
        return (
            <View >
                <Text>{this.renderAlbum()}</Text>
            </View>
        );
    }
}