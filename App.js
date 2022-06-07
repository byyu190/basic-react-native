import {View, Text} from "react-native";
import AcceptInput from "./AcceptInput";
import HomeScreen from "./HomeScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from "./crud/mahasiswa/List";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Home Screen',
                        headerStyle: {
                            
                            backgroundColor: '#e7305b'
                        },
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="AcceptingInput"
                    component={AcceptInput}
                />
                
                <Stack.Screen
                    name="MahasiswaList"
                    component={List}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
