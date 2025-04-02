import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import "./global.css"

export default function App() {
  return (
    <View className='flex justify-center'>
      <Text className='bg-slate-500 text-2xl'>App</Text>
      <StatusBar />
    </View>
  )
}
