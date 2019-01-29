
import React, {Component, PureComponent} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import PropTypes from 'prop-types'


export default class PropsTest extends Component{
    constructor(props) {
      super(props);
      this.state = {};
    }

    static defaultProps={
        name:"Tina"
    }

    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired
    }


    render(){
        return(<View>
            <Text>姓名：{this.props.name}</Text>
            <Text>age: {this.props.age}</Text>
            <Text>sex: {this.props.sex}</Text>
        </View>)

    }
    
}