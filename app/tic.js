import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import LinkButton from '../components/LinkButton';
import { useState } from 'react';

export default function TicTacToe() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.gameboard}
        source={require('../assets/tictactoe-board.png')}
      >
        <GameboardElements>

        </GameboardElements>
      </ImageBackground>
    </View>
  );
}

const [available, setAvailability] = useState([1,2,3,4,5,6,7,8,9])

const move = (num) => {
  if(available[num]){
    
  }
}

const GameboardElements = () => {
  return (
    <View
      style={styles.gameboard}
    >
      {/* 1 */}
      <Pressable
        style={styles.items}
        onPress={() => move(0)}
      >
        
      </Pressable>
      {/* 2 */}
      <Pressable
        style={styles.items}
      >
        
      </Pressable>
      {/* 3 */}
      <Pressable
        style={styles.items}
      >
        
      </Pressable>
      {/* 4 */}
      <Pressable
        style={styles.items}
      >
        
      </Pressable>
      {/* 5 */}
      <Pressable
        style={styles.items}
      >
        
      </Pressable>
      {/* 6 */}
      <Pressable
        style={styles.items}
      >
        
      </Pressable>
      {/* 7 */}
      <Pressable
        style={styles.items}
      >
        
      </Pressable>
      {/* 8 */}
      <Pressable
        style={styles.items}
      >
        
      </Pressable>
      {/* 9 */}
      <Pressable
        style={styles.items}
      >
        
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameboard: {
    height: 615,
    width: 650,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 90,
  },
  items: {
    height: 140,
    width: 140,
    // backgroundColor: 'red'
  }
});
