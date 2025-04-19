import { ScrollView, Text } from "react-native"
import { Link } from "expo-router"

export default function DrawerScreens() {
  return (
    <ScrollView className='flex-1 p-4'>
      <Text className='text-white'>MENU</Text>
      <Link
        href='/'
        className='p-4 text-white rounded active:bg-white active:text-black'
      >
        Home
      </Link>
      <Link
        href='explore'
        className='p-4 text-white active:bg-white active:text-black'
      >
        Buscar
      </Link>
      <Link
        href='book'
        className='p-4 text-white active:bg-white active:text-black'
      >
        Agendar
      </Link>
      <Link
        href='profile'
        className='p-4 text-white active:bg-white active:text-black'
      >
        Mi cuenta
      </Link>
    </ScrollView>
  )
}
