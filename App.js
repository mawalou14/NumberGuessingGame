import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Colors from './constants/Colors';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHander(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHander} />;

  if(userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={[Colors.primary600, Colors.accent500]} style={styles.rootContainer}>
      <ImageBackground 
      source={require('./assets/images/bg.jpg')} 
      resizeMode='cover' 
      style={styles.rootContainer}
      imageStyle={styles.backgroundImg}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  backgroundImg: {
    opacity: 0.55
  }
});
