import { Link } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"
import { UserIcon } from "../Icons"
import { useState } from "react"
import StatsView from "./components/StatsView"
import DrawerScreens from "./components/DrawerScreens"

export default function CustomDrawerContent() {
  const [user, setUser] = useState(false)

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

      <StatsView />
      <DrawerScreens />
      {/* Login / Logout abajo */}
      <View className='p-4 border-t border-[#333333]'>
        <TouchableOpacity className='py-2'>
          <Link href={"/logIn"}>
            <Text className='text-white text-center'>Login</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className='py-2 mt-2'>
          <Text className='text-white text-center'>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
