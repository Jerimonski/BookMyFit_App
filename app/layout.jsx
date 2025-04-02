import { View } from "react-native"
import { Slot } from "expo-router"

export default function App() {
  return (
    <View className='flex-1 bg-black items-center justify-center'>
      <Slot />
    </View>
  )
}
