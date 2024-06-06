import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'
import { color } from 'ansi-fragments'
import { main, primary, secondary } from '../../utils'

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarActiveBackgroundColor: primary,
      tabBarStyle: {
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 5,
        height: 70,
        backgroundColor: main
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          tabBarInactiveBackgroundColor: main,
          tabBarItemStyle: {
            padding: 8,
            minWidth: 90,
            minHeight: 60,
            borderRadius: 8,
            flexGrow: 0,
            marginRight: 40
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarInactiveBackgroundColor: main,
          tabBarItemStyle: {
            padding: 8,
            minWidth: 90,
            minHeight: 60,
            borderRadius: 8,
            flexGrow: 0
          },
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />
        }}
      />
    </Tabs>
  )
}

const styles = StyleSheet.create({})

export default TabLayout
