import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Colors from './constants/Colors';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.rootContainer}>
        <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
});
