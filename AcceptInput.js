import {View, Text, Button, TextInput, Image, FlatList, ScrollView, StyleSheet} from "react-native";
import React, {useState} from 'react';
import {inline} from "react-native-web/dist/exports/StyleSheet/compile";
import {styles, styles2} from "./assets/styles/StylesExample";

export default function AcceptInput({navigation, route}) {
    const [text, setText] = useState("test");

    return <ScrollView style={styles.container}>
        <View>
            <Image
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Image
                source={{
                    url: 'https://reactnative.dev/img/tiny_logo.png'
                }}
                style={{
                    width: 50,
                    height: 50,
                }}
            />
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{width: 50, height: 50}}
            />
        </View>
        <TextInput
            style={styles2.textInput({
                padding: 5
            })}
            onChangeText={setText}
            placeholder="useless placeholder"
        />
        <Button
            title="Show Text"
            onPress={() => {
                console.log("button press");
            }}
        />
        <Text>{text}</Text>
    </ScrollView>;
}
