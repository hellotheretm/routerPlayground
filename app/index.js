import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Main page</Text>

      <LinkButton page='about' text='About' icon="question-circle" iconSize={28} iconColor="black" />
      <LinkButton page='contact' text='Contact' icon="phone" iconSize={32} iconColor="black" />
      <LinkButton page='profile' text='Profile' icon='user' iconSize={32} iconColor="black" />
      <LinkButton page='customize' text='Customize' icon='user' iconSize={32} iconColor="black" />
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
