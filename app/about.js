import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About page</Text>
      <LinkButton page='contact' text='Contact' icon="phone" iconSize={32} iconColor="black" />
      <LinkButton page='profile' text='Profile' icon='user' iconSize={32} iconColor="black" />
      <LinkButton page='/' text='' icon='home' iconSize={32} iconColor='black'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
