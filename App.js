import { ImageBackground, StyleSheet } from 'react-native';
import Colors from './constants/Colors';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import GameScreen from './screens/GameScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import GameOverScreen from './screens/GameOverscreen';
import { StatusBar } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans_Condensed-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHander(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHander} />;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  return (
    <>
    <StatusBar style='dark' />
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
    </>
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
