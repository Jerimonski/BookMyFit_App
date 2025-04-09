import { Link } from "expo-router"
import { View, Text, TouchableOpacity } from "react-native"
import { UserIcon } from "../Icons"
import StatsView from "./components/StatsView"
import DrawerScreens from "./components/DrawerScreens"
import { useUserContext } from "../../context/UserContext"

export default function CustomDrawerContent() {
  const { currentUser, setCurrentUser } = useUserContext()

  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <View className='flex-1 bg-[#111827] text-white'>
      {/* Mini sección de usuario */}
      <View className='flex-row items-center p-4 gap-4'>
        <UserIcon />
        {currentUser ? (
          <View className='flex flex-col gap-1'>
            <Text className='text-white font-semibold'>{currentUser.name}</Text>
            <Text className='text-white text-sm'>{currentUser.email}</Text>
          </View>
        ) : (
          <View className='flex flex-col gap-1'>
            <Text className='text-white font-semibold'>Invitado</Text>
            <Text className='text-white text-sm'>Sin sesión iniciada</Text>
          </View>
        )}
      </View>

      <StatsView />
      <DrawerScreens />

      <View className='p-4 border-t border-[#333333]'>
        {currentUser ? (
          <TouchableOpacity className='py-2' onPress={handleLogout}>
            <Text className='text-white text-center'>Logout</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity className='py-2'>
            <Link href={"/logIn"}>
              <Text className='text-white text-center'>Login</Text>
            </Link>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
