import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text>CONTACTO page</Text>
      <LinkButton page='about' text='GO to contact page'/>
      <LinkButton page='/' text='HOME'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
