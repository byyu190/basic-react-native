import React from "react";
import {Button, View, StatusBar} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            {/*<StatusBar backgroundColor='#fff'/>*/}
            <View style={{ padding: 15 }}></View>
            <Button
                title="Go to Accepting Input"
                onPress={() =>
                    navigation.navigate('AcceptingInput', {title: 'This is title'})
                }
            />
            <View style={{ padding: 5 }}></View>
            <Button
                title="Data Mahasiswa"
                onPress={() =>
                    navigation.navigate('MahasiswaList')
                }
            />
        </View>
    );
};

export default HomeScreen;