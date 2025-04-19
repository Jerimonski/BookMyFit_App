import { View, Text } from "react-native"

export default function ActivitiesCards({ title, children }) {
  return (
    <View className='rounded-md'>
      <Text className='text-white absolute bottom-0 z-10 text-md font-bold m-1 bg-black rounded-lg px-4'>
        {title}
      </Text>
      {children}
    </View>
  )
}
