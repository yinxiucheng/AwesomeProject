
import React, {Componet} from "react";

import {Text, View, TouchableOpacity} from "react-native";

export  default class  Parent extends Componet{
    constructor(props){
        super();
        this.state = {
            msg:"我是父亲"
        }
    }

   eat = (msgIemt)=>{
        console.log(msgIemt)
    }

    render(){
        return <Son_1 eat={this.eat} msg={this.state.msg}/>
    }

}

class Son_1 extends PureComponent{

    render(){
        return <View>
            <TouchableOpacity onPress={()=> this.props.eat("我是子组件")}>
                <Text>Divad</Text>
            </TouchableOpacity>
        </View>
    }

}