import { View, Text, StyleSheet } from 'react-native';
import {Answer, Question} from "../../models";
import {questions} from "../../api/questions";
import {useMemo, useState} from "react";
import QuestionForm from "../../components/QuestionForm";
import Result from "../../components/Result";
import {StatusBar} from "expo-status-bar";
import { main, secondary } from '../../utils'

const Tab = () => {
  const data: Question[] = questions
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  const progressValue = useMemo(() => step / Number(data?.length), [data, step])

  const handleNextClick = (answer: Answer): void => {
    setAnswers(prevAnswers => [...prevAnswers, answer])
    if (data) setStep((prevStep) => answers.length >= data.length ? data.length : prevStep + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bhagavad Gita Quiz App</Text>

      {
        data && answers.length < data.length
          ? <QuestionForm
            question={data[step]}
            progress={progressValue}
            onNext={handleNextClick}
          />
          : data && <Result questions={data} answers={answers} />
      }

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 10,
    backgroundColor: main,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflow: 'scroll'
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
export default Tab
