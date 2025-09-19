import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LinkButton({page, text}) {
  return (
    <View style={styles.container}>
      <Link href={page}>{text}</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 200,
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
