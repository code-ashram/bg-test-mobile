import {FC} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Bhagavad Gita Quiz App</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2c2c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
