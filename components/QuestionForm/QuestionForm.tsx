import { FC, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Button, ProgressBar, RadioButton } from 'react-native-paper'
import { primary, secondary } from '../../utils'
import { Question } from '../../models'

type Props = {
  question: Question
}

const QuestionForm: FC<Props> = ({ question }) => {
  const [checked, setChecked] = useState<string>('first')

  return (
    <>
      <View style={styles.progress}>
        <Text style={styles.questionNumber}>
          Question №{question.id}
        </Text>
        <ProgressBar style={styles.progressBar} progress={0.1} color={primary} />
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
          <Pressable key={option.id} style={styles.option} onPress={() => setChecked(String(option.id))}>
            <RadioButton
              color={primary}
              value={String(option.id)}
              status={checked === String(option.id) ? 'checked' : 'unchecked'}
            />
            <Text style={styles.optionText}>{option.text}</Text>
          </Pressable>
        )}
      </View>

      <Button style={styles.button} mode="contained" buttonColor={primary} onPress={() => console.log('Pressed')}>
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

export default QuestionForm
