import { View, Text, Pressable } from "react-native"

export default function OptionFooter({ title, children, onPress }) {
  return (
    <Pressable onPress={onPress} className='flex-1'>
      {({ pressed }) => (
        <View className='flex items-center py-2 px-4'>
          <View className='py-2'>{children}</View>
          <Text
            className={`font-semibold font-Inter ${
              pressed ? "text-light-green" : "text-white"
            }`}
          >
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  )
}
