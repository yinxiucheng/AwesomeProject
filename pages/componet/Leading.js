import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Button,
    StatusBar
} from 'react-native';

export default class BookList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <StatusBar backgroundColor="#f00" barStyle="light-content" />
                <Text>我是书籍列表</Text>
                <Button title="按钮" onPress={()=>navigate('BookDetail',{ bookId: '10000' })}/>
            </View>
        )
    }
}