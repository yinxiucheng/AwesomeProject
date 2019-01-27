

import React, {Component, PureComponent} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';



export default class Prarents extends Component<Props> {

    constructor(props) {
      super(props);
      this.state = {};
        console.log("0 constructor")
    }


    onClickSon = (msgFromSon)=>{
        console.log(msgFromSon)
    }

    render(){
        return <Son onClickSon={this.onClickSon}/>
    }
}


class Son extends PureComponent{

    render(){
        return <View>
            <TouchableOpacity onPress={()=> this.props.onClickSon("我是子组件")}>
                <Text>Hello</Text>
            </TouchableOpacity>
        </View>
    }
}