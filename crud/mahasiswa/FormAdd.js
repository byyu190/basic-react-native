import React from "react";
import {View, FlatList, ScrollView, Text, TextInput} from "react-native";
import {mahasiswa} from "./dataExample";
import {mahasiswaStyle} from "./../../assets/styles/StylesExample";

const FormAdd = () => {

    return <ScrollView style={mahasiswaStyle.container}>
        <TextInput
            defaultValue=""
            // onChangeText={setText}
            placeholder="useless placeholder"
        />
    </ScrollView>
};

export default FormAdd;