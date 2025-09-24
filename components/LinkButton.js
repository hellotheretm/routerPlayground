import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function LinkButton({page, text, icon, iconSize, iconColor}) {
  return (
    <View style={styles.container}>
      <AntDesign name={icon} size={iconSize} color={iconColor}/>
      <Link href={page}>{text}</Link>
    </View>
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
