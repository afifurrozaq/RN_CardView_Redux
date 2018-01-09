import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
export default class AlbumDetail extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailcontainer}>
                        <Image style={styles.thumbnail} source={{ uri: this.props.album.thumbnail_image}}/>
                </View>
                <View style={styles.headercontent}>
                <Text>{this.props.album.title}</Text>
                <Text>{this.props.album.artist}</Text>
                </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    headercontent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnail:{
        height: 50,
        width: 50
    },
    thumbnailcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
});