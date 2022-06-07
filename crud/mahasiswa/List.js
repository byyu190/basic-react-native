import React, {useState, useEffect} from "react";
import {View, FlatList, ScrollView, Text, SafeAreaView, TextInput, Button} from "react-native";
import {mahasiswa} from "./dataExample";
import {mahasiswaStyle} from "./../../assets/styles/StylesExample";
import FormAdd from "./FormAdd";
import {StyleSheet} from "react-native";
import Swipeout from "react-native-swipeout";
import uuid from 'react-native-uuid';
//import SwipeOut from "react-native-swipeout";

const List = () => {

    const [data, setData] = useState(mahasiswa); 
    const [nama, setNama] = useState("");
    const [nim, setNim] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [indexofArray, setIndexofarray] = useState("");

    useEffect(() => { 
        
    }, [data]); 

    
    const handleRemove = (id) => {
        let newList = data.filter(function(item)  {
            return item.id !== id});
            //console.log(newList)
        setData(newList);
        setRefresh(true);
    };

    const cariData = (nimm) =>{
        
        // let newList2 = data.filter(function(item)  {
        //     return item.nim == nimm});
        //     console.log(newList2)
        // setData(newList2);
        // //setRefresh(true);
     
        const newItem = data.filter((newVal) => {
             return newVal.nim === nimm;
        });
        // console.log(newItem);
        // console.log("nim:",nimm);
        setData(newItem);
        
    };

    const handleUpdate = (par) => {
        setNama(par.nama)
        setNim(par.nim)
    };

    const updateData = () => {
        let newData = data;
        newData.splice(indexofArray, 0, {
            id : id,
            nim : nim,
            nama : nama
        });
        setData(newData);
        setRefresh(true);
    };
    const addData = () => {
        let newData = data;
        newData.push({
            id: uuid.v4(),
            nim: nim,
            nama: nama
        });
        setData(newData);
        setRefresh(true);
    };

    

    return <SafeAreaView style={mahasiswaStyle.container}>
        {/*<FormAdd/>*/}
        <View>
        <Text >Tambah Data Mahasiswa</Text>
        <View style={{ padding: 5 }}></View>
            <TextInput
                defaultValue=""
                value={nama}
                onChangeText={setNama}
                placeholder="Nama"
            />

            <TextInput
                defaultValue=""
                value={nim}
                onChangeText={setNim}
                placeholder="Nim"
            />
            
            <View style={{ padding: 5 }}></View>

            <Button
                title="Simpan"
                onPress={() => {
                    addData();
                 }}
            />
            <Button
                title="Update"
                onPress={() => {
                    updateData();
                 }}
            />
        </View>
        <Separator />
       
        <Text>Cari Data Mahasiswa</Text>
        <View>
            <TextInput
                onChangeText={setNim}
                placeholder="Masukan Nim"
            />
        </View>
    
        <Button
                
                title="Cari"
                onPress={() => {
                    cariData(nim);
                 }}
            />

        <Separator />


        <Text >Data Mahasiswa</Text>                
        <FlatList
            data={data}
            renderItem={({item}) => 
            
            <View style={mahasiswaStyle.listItem}>
                
                <Text style={styles3.flatListItem}>{item.nama}</Text>
                <View style={{ padding: 2 }}></View>
                <Text>{item.nim}</Text>
                <View style={{ padding: 5 }}></View>
                <Button
                title="Update"
                color="black"
                
                onPress={() => {handleUpdate(item);}}
                />
                <View style={{ padding: 2 }}></View>
                <Button
                title="Delete"
                color="red"
                
                onPress={() => {handleRemove(item.id);}}
                />
            
                
            </View>}
            keyExtractor={item => item.id}
            extraData={data}
            refreshing={refresh}
            onEndReached={() => {
                setRefresh(false)
            }}
        />
    </SafeAreaView>
};

const Separator = () => (
    <View style={styles.separator} />
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

const styles3 = StyleSheet.create({
    flatListItem: {
        color: "white"
    }
});


export default List;