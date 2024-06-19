import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Colors from './constants/Colors';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameOverScreen from './screens/GameOverscreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHander(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHander} />;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient colors={[Colors.primary600, Colors.accent500]} style={styles.rootContainer}>
      <ImageBackground 
      source={require('./assets/images/bg.jpg')} 
      resizeMode='cover' 
      style={styles.rootContainer}
      imageStyle={styles.backgroundImg}
      >
      <SafeAreaView style={styles.rootContainer}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },

  backgroundImg: {
    opacity: 0.55
  }
});
