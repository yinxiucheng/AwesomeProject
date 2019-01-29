import React, {Component, PureComponent} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import PropTypes from 'prop-types'

export default class RefTest extends Component{

    constructor(props) {
      super(props);
      this.state = {
          size:100,
      };
    }


    getSize(){
        return this.state.size
    }

    render(){
        return <Text>I'm Tina!!!</Text>
    }

}