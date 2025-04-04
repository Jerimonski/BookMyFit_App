import { View, Text } from "react-native"
import { Link } from "expo-router"

export default function Detail() {
  return (
    <View className='flex-1 justify-center items-center'>
      <View>
        <Text className='font-bold mb-8 text-2xl'>Detalle del nose</Text>
        <Link href='/' className='bg-blue-500'>
          Volver a home
        </Link>
      </View>
    </View>
  )
}
