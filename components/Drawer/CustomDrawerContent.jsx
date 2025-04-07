import { Link } from "expo-router"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { UserIcon } from "../Icons"

export default function CustomDrawerContent() {
  return (
    <View className='flex-1 bg-[#111827] text-white'>
      {/* Mini sección de usuario */}
      <View className='flex-row items-center p-4 gap-4'>
        <UserIcon />
        <View className='flex flex-col gap-1'>
          <Text className='text-white font-semibold'>User Name</Text>
          <Text className='text-white text-sm'>
            UserGmailExample@gmail.userCom
          </Text>
        </View>
      </View>

      {/* statsView */}
      <View className='border-[#333333] border-b flex-row py-4'>
        <View className='flex-1'>
          <Text className='text-light-green font-bold text-2xl text-center'>
            12
          </Text>
          <Text className='text-secondary-text text-sm text-center'>
            Booking
          </Text>
        </View>
        <View className='flex-1 border-x-2 border-[#333333]'>
          <Text className='text-light-green font-bold text-2xl text-center'>
            12
          </Text>
          <Text className='text-secondary-text text-sm text-center'>
            Booking
          </Text>
        </View>
        <View className='flex-1'>
          <Text className='text-light-green font-bold text-2xl text-center'>
            12
          </Text>
          <Text className='text-secondary-text text-sm text-center'>
            Booking
          </Text>
        </View>
      </View>

      {/* Aquí irán las screens del drawer */}
      <ScrollView className='flex-1 p-4'>
        <Text className='text-white'>MAIN MENU</Text>
        {/* Aquí puedes poner opciones si quieres, tipo links o botones */}
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

      {/* Login / Logout abajo */}
      <View className='p-4 border-t border-[#333333]'>
        <TouchableOpacity className='py-2'>
          <Text className='text-white text-center'>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className='py-2 mt-2'>
          <Text className='text-white text-center'>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
