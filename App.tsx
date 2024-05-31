import { FC, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Divider, ProgressBar, RadioButton } from 'react-native-paper'

const primary: string = '#006fee'
const secondary: string = '#575555'

const App: FC = () => {
  const [checked, setChecked] = useState<string>('first')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bhagavad Gita Quiz App</Text>

      <View style={styles.progress}>
        <Text style={styles.questionNumber}>
          Question №1
        </Text>
        <ProgressBar style={styles.progressBar} progress={0.1} color={primary} />
      </View>

      <Divider />

      <View>
        <Text style={styles.question}>
          What is the name of Lord Krishna’s seashell?
        </Text>
      </View>


      <View style={styles.optionsList}>
        <Text style={styles.task}>Choose the correct answer:</Text>

        <Pressable style={styles.option} onPress={() => setChecked('first')}>
          <RadioButton
            color={primary}
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            // onPress={() => setChecked('first')}
          />
          <Text style={styles.optionText}>Option 1</Text>
        </Pressable>
        <Pressable style={styles.option} onPress={() => setChecked('second')}>
          <RadioButton
            color={primary}
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.optionText}>Option 2</Text>
        </Pressable>
        <Pressable style={styles.option} onPress={() => setChecked('third')}>
          <RadioButton
            color={primary}
            value="third"
            status={checked === 'third' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.optionText}>Option 3</Text>
        </Pressable>
      </View>

      <Button style={styles.button} mode="contained" buttonColor={primary} onPress={() => console.log('Pressed')}>
        <Text style={styles.buttonText}>Next</Text>
      </Button>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 10,
    backgroundColor: '#18181b',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  optionsList: {
    marginTop: 20,
    width: '100%'
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5,
    borderStyle: 'solid',
    borderColor: secondary,
    borderWidth: 1,
    borderRadius: 7
  },
  optionText: {
    color: 'white'
  },
  task: {
    marginVertical: 5,
    fontSize: 18,
    color: 'white'
  },
  question: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'left',
    color: 'white'
  },
  questionNumber: {
    marginTop: 8,
    color: 'white',
    fontSize: 18
  },
  progress: {
    marginTop: 7,
    width: '100%'
  },
  progressBar: {
    marginTop: 5,
    height: 10,
    borderRadius: 7,
    backgroundColor: secondary
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 5,
    borderRadius: 9
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default App
