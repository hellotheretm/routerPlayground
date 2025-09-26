import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import LinkButton from '../../components/LinkButton';


export default function Map() {
  return (
    <View style={styles.container}>
      <Text>Maps page</Text>
      <MapView style={styles.map}/>
      <LinkButton page='about' text='About' icon="question-circle" iconSize={28} iconColor="black" />
      <LinkButton page='contact' text='Contact' icon="phone" iconSize={32} iconColor="black" />
      <LinkButton page='/' text='' icon='home' iconSize={32} iconColor='black'/>
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
  map: {
    width: '100%',
    height: '100%',
  },
});
