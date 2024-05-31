import { FC, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import QuestionForm from './components/QuestionForm'

import { secondary } from './utils'
import { Question } from './models'
import { questions } from './api/questions'

const App: FC = () => {
  const [data, setData] = useState<Question[]>(questions)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bhagavad Gita Quiz App</Text>

      <QuestionForm question={questions[0]}/>

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
})

export default App
