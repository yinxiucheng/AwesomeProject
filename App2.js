/**
 * Sample React Native App4
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>

                <Button style={styles.btn}
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button style={styles.btn}
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button style={styles.btn}
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />

            </View>
        );
    }
}


class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Setting Screen</Text>
                <Button
                    title="Go to ProfileScreen"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}


class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Details Screen</Text>

                <Button style={styles.btn}
                        title="Go to ProfileScreen...again"
                        onPress={() => this.props.navigation.push('Details')}
                />
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen
},{
    initialRouteName:"Home"
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Profile: ProfileScreen,
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    }
);


const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

const styles = StyleSheet.create({
    btn:{
        marginTop:20,
        margin:50
    }
})


