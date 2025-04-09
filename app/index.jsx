import { View, Text } from "react-native"
import { Link } from "expo-router"
export default function index() {
  return (
    <View className='flex-1'>
      <View className='bg-[#5e5e5e] gap-2 px-4 pt-24 h-max'>
        <Text className='text-white text-3xl font-bold'>
          Book your
          <Text className='text-light-green'> sports activities</Text> with ease
        </Text>
        <Text className='text-white'>
          Reserve courts, book classes, and secure your spot at our
          state-of-the-art sports center.
        </Text>
        <Link
          className='my-2 py-3 w-56 active:brightness-75 text-center rounded-lg bg-light-green'
          href={"/book"}
        >
          Book Now
        </Link>
      </View>
      <View className='flex-1 bg-black'></View>
    </View>
  )
}
