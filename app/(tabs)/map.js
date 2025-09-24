import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../../components/LinkButton';


export default function Map() {
  return (
    <View style={styles.container}>
      <Text>Maps page</Text>
      <LinkButton page='/' text='HOME'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fd8ceff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
