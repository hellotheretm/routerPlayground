import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Main page</Text>

      <LinkButton page='about' text='GO to about page' icon='aim' iconSize={32} iconColor='black'/>
      <LinkButton page='contact' text='GO to contact page'/>
      <LinkButton page='profile' text='GO to profile page'/>
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
});
