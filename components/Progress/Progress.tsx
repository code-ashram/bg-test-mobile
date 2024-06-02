import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { secondary } from '../../utils'

type Props = {
  progress: number
  color: string
}

const Progress: FC<Props> = ({ progress, color }) => {
  return (
    <View style={styles.progress}>
      <View style={styles.progressText}>
        <Text style={styles.questionNumber}>
          Your progress:
        </Text>

        <Text style={styles.result}>
          {(progress * 100).toFixed(0)}%
        </Text>
      </View>

      <ProgressBar style={styles.progressBar} progress={progress} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  result: {
    color: 'white',
    fontSize: 18
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
  progressText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  progressBar: {
    marginTop: 5,
    height: 10,
    borderRadius: 7,
    backgroundColor: secondary
  }
})

export default Progress
