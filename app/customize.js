import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import LinkButton from '../components/LinkButton';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Customize() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Home', value: 'apple' },
        { label: 'Contact', value: 'banana' }
    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Customize page</Text>
            <DropDownPicker
                placeholder='Select page to customize'
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textStyle: {
        fontSize: 20,
    },
});
