import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state={ album: [] };
    componentWillMount(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ album: data }));
    
    }   

    renderAlbum(){
        return this.state.album.map(album => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView >
                {this.renderAlbum()}
            </ScrollView>
        );
    }
}