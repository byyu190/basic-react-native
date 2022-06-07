import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
    },
    textInput: {
        // border: "1px solid #000",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "red",
        margin: 10,
        padding: 10
    }
});

const styles2 = StyleSheet.create({
    textInput: (props) => (
        {
            // border: "1px solid #000",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "red",
            margin: 10,
            padding: props.padding
        }
    )
});

const mahasiswaStyle = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: "column",
        flex: 1
    },
    textInput: {
        // border: "1px solid #000",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "red",
        margin: 10,
        padding: 10
    },
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: "green"
    }
});

export {
    styles,
    styles2,
    mahasiswaStyle
};