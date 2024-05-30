import {FC, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {RadioButton} from 'react-native-paper'

const App: FC = () => {
  const [checked, setChecked] = useState<string>('first')
  const primary: string = '#006fee'

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bhagavad Gita Quiz App</Text>

      <View>
        <Text style={styles.question}>
          What is the name of Lord Krishna’s seashell?
        </Text>
      </View>

      <Text style={styles.task}>Choose the correct answer:</Text>

      <View style={styles.option}>
        <RadioButton
          color={primary}
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <Text>Option 1</Text>
      </View>
      <View style={styles.option}>
        <RadioButton
          color={primary}
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
        <Text>Option 2</Text>
      </View>
      <View style={styles.option}>
        <RadioButton
          color={primary}
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('third')}
        />
        <Text>Option 3</Text>
      </View>
      <StatusBar style="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#a19e9e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 26,
    textDecorationLine: 'underline',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    marginBottom: 5,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 7,
  },
  task: {
    fontSize: 18,
  },
  question: {
    textAlign: 'left',
    fontSize: 20,
  }
})

export default App
