import { FC, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Button, RadioButton } from 'react-native-paper'

import Progress from '../Progress'

import { primary, secondary } from '../../utils'
import { Answer, Question } from '../../models'

type Props = {
  question: Question
  onNext: (answer: Answer) => void
  progress: number
}

const QuestionForm: FC<Props> = ({ question, onNext, progress }) => {
  const [checked, setChecked] = useState<string>('first')
  const [answer, setAnswer] = useState<Answer | null>(null)

  const handleSubmitAnswer = () => {
    if (answer) onNext(answer)
    setAnswer(null)
  }

  return (
    <>
      <View style={styles.progress}>
        <Text style={styles.questionNumber}>
          Question №{question.id}
        </Text>

        <Progress progress={progress} color={primary}/>
      </View>

      <View>
        <Text style={styles.question}>
          {question.question}
        </Text>
      </View>


      <View style={styles.optionsList}>
        <Text style={styles.task}>
          {question.task}
        </Text>

        {question.options.map((option) =>
          <Pressable key={option.id} style={styles.option} onPress={() => {
            setChecked(String(option.id))
            setAnswer({ answerId: option.id, questionId: question.id })
          }}>
            <RadioButton
              color={primary}
              value={String(option.id)}
              status={checked === String(option.id) ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(String(option.id))
                setAnswer({ answerId: option.id, questionId: question.id })
              }}
            />

            <Text style={styles.optionText}>{option.text}</Text>
          </Pressable>
        )}
      </View>

      <Button style={styles.button} mode="contained" buttonColor={primary} onPress={handleSubmitAnswer}>
        <Text style={styles.buttonText}>Next</Text>
      </Button>
    </>
  )
}

const styles = StyleSheet.create({
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
    borderRadius: 7,
  },
  optionText: {
    width: '87%',
    color: 'white',
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

export default QuestionForm
