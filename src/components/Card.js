import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <Text>{this.props.album.title}</Text>
        );
    }
}
