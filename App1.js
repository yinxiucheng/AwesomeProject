/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, PureComponent} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropsTest from './PropsTest'
import RefTest from './RefTest'
import PizzaTranslator from './PizzaTranslator'

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


    onClickSon = (msgFromSon)=>{
        console.log(msgFromSon)
    }

    // render(){
    //     return <Son onClickSon={this.onClickSon}/>
    // }

    // render(){
    //     return <PropsTest name="yxc" age={18} sex="man"/>
    // }


    render(){
        return (
            <View>
                <Text style={{fontSize:20}} onPress={()=>{
                    var size=this.refs.refTest.getSize()
                    this.setState()
                }}>

                </Text>

                <RefTest ref="refTest"/>

            </View>
        )
    }

    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={styles.welcome}>Welcome to React Native!</Text>
    //             <Text style={styles.instructions}>To get started, edit App.js</Text>
    //             <Text style={styles.instructions}>{instructions}</Text>
    //         </View>
    //     );
    // }




}


class Son extends PureComponent{

    render(){
        return <View>
            <TouchableOpacity onPress={()=> this.props.onClickSon("我是子组件")}>
                <Text>Divad</Text>
            </TouchableOpacity>
        </View>
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
