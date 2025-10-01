import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Styling({ flex, color, alignItems, justifyContent, icon, iconSize, iconColor }) {
    return (
        <View
            style={[
                flex = {flex},
                backgroundColor = { color },
                alignItems = {alignItems},
                justifyContent = {JustifyContent},
            ]}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
});
