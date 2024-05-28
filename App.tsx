import { FC, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { RadioButton } from 'react-native-paper'

const App: FC = () => {
  const [checked, setChecked] = useState<string>('first')

  return (
    <View style={styles.container}>
      <Text>Bhagavad Gita Quiz App</Text>
      <RadioButton
        color="blue"
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
      <RadioButton
        value="second"
        status={checked === 'third' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('third')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2c2c',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
