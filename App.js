import React, { Component } from 'react';
import {
    Alert, ScrollView, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity,
    TouchableNativeFeedback, TouchableWithoutFeedback, View, get
} from 'react-native';
import Button from 'react-native-micro-animated-button';
import Amplify from 'aws-amplify';
import aws_exports from './awsmobilejs/#current-backend-info/aws-exports';
Amplify.configure(aws_exports);

export default class LouieUI extends Component {

    state={clicked: false};

    render() {
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <View style={{flex: 1, flexDirection:'column'}}>
                <View style={{flex: 1, backgroundColor: 'rgb(152, 30, 50)', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <Text
                        style={{color:'white', fontSize:50, fontWeight:'bold'}}>
                        Louie
                    </Text>
                </View>
                <View style={{flex: 4,backgroundColor: 'white', flexDirection:'column'}}>
                    <Text>Response: {this.state.apiResponse && JSON.stringify(this.state.apiResponse)}</Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'white',alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                    <Button
                        title="SendRequest"
                        activeOpacity={0.5}
                        foregroundColor={colors.black}
                        labelIcon="microphone"
                        iconSize={30}
                        labelStyle={styles.bold}
                        noFill
                        onPress={
                            this.getSample.bind(this)
                        }
                        onSecondaryPress={() =>
                            this.setState({ clicked: false }, () => this.b8.reset())
                        }
                        ref={ref => (this.b8 = ref)}
                        successColor={colors.black}
                        successIconColor={colors.umsl}
                        successIconName="microphone"
                        style={styles.ask}
                    />

                </View>
            </View>

        );
    }

    state = { apiResponse: null };

    async getSample() {
        const path = "/voiceEnabled"; // you can specify the path
        const apiResponse = await LouieAPI.get("LouieVoice" , path); //replace the API name
        console.log('response:' + apiResponse);
        this.setState({ apiResponse });
    }
}


const colors =
    Platform.OS === 'ios'
        ? {
            blue: '#007aff',
            gray: '#d8d8d8',
            green: '#4cd964',
            red: '#ff3b30',
            white: '#ffffff',
            black: '#000',
            umsl: '#981e32'
        }
        : {
            blue: '#4285f4',
            gray: '#d8d8d8',
            green: '#0f9d58',
            red: '#db4437',
            white: '#ffffff',
            black: '#000',
            umsl: '#981e32'
        };

const styles = {
    center: { alignItems: 'center' },
    landing: { flex: 1, justifyContent: 'center' },
    noRadius: { borderRadius: 0 },
    rightText: { color: colors.blue, marginLeft: 10 },
    row: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
    bold:{ fontSize:50, fontWeight:'bold'},
    ask:{ height:80, width:80, borderRadius:100}
};



