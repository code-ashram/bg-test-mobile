import { FC, useMemo } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'
import ScrollView = Animated.ScrollView

import Progress from '../Progress'

import { Answer, Question } from '../../models'
import { secondary, setProgressColor } from '../../utils'

type Props = {
  questions: Question[]
  answers: Answer[]
}

const Result: FC<Props> = ({ questions, answers }) => {
  const result = useMemo(() => questions.reduce((acc, question) => {
    const userAnswer = answers.find((answer) => answer.questionId === question.id)
    const answer = question.options.find((option) => option.id === userAnswer?.answerId)

    return acc + (answer?.isCorrect ? 1 : 0) / answers.length
  }, 0), [answers, questions])

  return (
    <>
      <Progress progress={result} color={setProgressColor(result)} />

      <ScrollView style={styles.scrollView}>
        {
          questions.map((question) => {
            const userAnswer = answers.find((answer) => answer.questionId === question.id)
            const answer = question.options.find((option) => option.id === userAnswer?.answerId)

            return (
              <View key={question.id} style={styles.answer}>
                <Text style={styles.answerSubTitle}>
                  Question: <Text style={styles.answerText}>{question.question}</Text>
                </Text>

                <Text style={styles.answerSubTitle}>
                  Answer: <Text style={answer?.isCorrect ? styles.isCorrect : styles.isWrong}>{answer?.text}</Text>
                </Text>
              </View>
            )
          })
        }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  answer: {
    marginTop: 10,
    padding: 7,
    width: '100%',
    borderStyle: 'solid',
    borderColor: secondary,
    borderWidth: 1,
    borderRadius: 7
  },
  isCorrect: {
    color: 'green'
  },
  isWrong: {
    color: 'red'
  },
  answerSubTitle: {
    color: 'white',
    fontWeight: 'bold'
  },
  answerText: {
    color: 'white',
    fontWeight: 'normal'
  },
  question: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'left',
    color: 'white'
  },
  scrollView: {
    marginVertical: 10
  }
})

export default Result
