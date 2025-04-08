import { ScrollView, Text } from "react-native"
import { Link } from "expo-router"

export default function DrawerScreens() {
  return (
    <ScrollView className='flex-1 p-4'>
      <Text className='text-white'>MAIN MENU</Text>
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
        Explore
      </Link>
      <Link
        href='book'
        className='p-4 text-white active:bg-white active:text-black'
      >
        Book
      </Link>
      <Link
        href='bookings'
        className='p-4 text-white active:bg-white active:text-black'
      >
        bookings
      </Link>
      <Link
        href='profile'
        className='p-4 text-white active:bg-white active:text-black'
      >
        Profile
      </Link>
    </ScrollView>
  )
}
