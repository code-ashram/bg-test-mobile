export const primary: string = '#006fee'
export const secondary: string = '#575555'
export const main: string = '#18181b'

export const setProgressColor = (progress: number) => {
  if (progress <= 0.25) {
    return 'red'
  } else if (progress > 0.25 && progress <= 0.50) {
    return 'yellow'
  } else if (progress > 0.50 && progress <= 0.75) {
    return primary
  } else {
    return 'green'
  }
}
