/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
      super(props);
      this.state = {};
        console.log("0 constructor")
    }

    componentWillMount(){
        console.log("1 componentWillMount")
    }

    componentDidMount(){
        console.log("2 componentDidMount")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("3 componentDidMount")
        return true
    }

    componentWillReceiveProps(nextProps) {
        console.log("4 componentWillReceiveProps")
    }

    componentWillUnmount() {
        console.log("5 componentWillUnmount")
    }

    componentWillUpdate(){
        console.log("6 componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("7 componentDidUpdate")
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
