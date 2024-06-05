import {Stack} from 'expo-router/stack';

const Layout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  )
}

export default Layout
