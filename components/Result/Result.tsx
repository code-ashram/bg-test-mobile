import { FC, useMemo } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ProgressBar } from 'react-native-paper'

import { Answer, Question } from '../../models'
import { primary, secondary } from '../../utils'

type Props = {
  questions: Question[]
  answers: Answer[]
}

const Result: FC<Props> = ({ questions, answers }) => {
  const result = useMemo(() => questions.reduce((acc, question) => {
    const userAnswer = answers.find((answer) => answer.questionId === question.id)
    const answer = question.options.find((option) => option.id === userAnswer?.answerId)

    return acc + (answer?.isCorrect ? 1 : 0) / answers.length * 100
  }, 0), [answers, questions])

  const setProgressColor = (progress: number) => {
    if (progress <= 25) {
      return 'red'
    } else if (progress > 25 && progress <= 50) {
      return 'yellow'
    } else if (progress > 50 && progress <= 75) {
      return primary
    } else {
      return 'green'
    }
  }
  return (
    <View>
      <View style={styles.progress}>
        <Text style={styles.questionNumber}>
          Your progress:
        </Text>

        <ProgressBar style={styles.progressBar} progress={result} color={setProgressColor(result)} />
      </View>

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
    </View>
  )
}

const styles = StyleSheet.create({
  answer: {
    marginTop: 10,
    padding: 7,
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
  }
})

export default Result
