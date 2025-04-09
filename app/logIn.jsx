import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { Link, useRouter } from "expo-router"
import useUsers from "../components/hooks/useUsers"
import { useUserContext } from "../context/UserContext"

export default function LogIn() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  const { user } = useUsers()
  const { setCurrentUser } = useUserContext()

  const handleLogin = () => {
    const foundUser = user.find(
      (u) =>
        (u.email.toLowerCase() === email.toLowerCase() ||
          u.name.toLowerCase() === name.toLowerCase()) &&
        u.password === password
    )

    if (foundUser) {
      setCurrentUser(foundUser) // 👈 Guardamos el usuario logueado en Context
      Alert.alert("Bienvenido 💚", `Hola ${foundUser.name} ✨`)
      router.replace("/")
    } else {
      Alert.alert("Oops 😢", "Correo o contraseña incorrectos")
    }
  }

  return (
    <View className='flex-1 bg-[#111827] items-center justify-center p-6'>
      <View className='bg-[#4ade80] rounded-full w-16 h-16 items-center justify-center mb-6'>
        <Text className='text-white text-xl font-bold'>SC</Text>
      </View>

      <Text className='text-white text-3xl font-bold mb-2'>Welcome Back</Text>
      <Text className='text-[#acaeb8] mb-8'>
        Sign in to continue to SportsCenter
      </Text>

      <View className='w-full mb-4'>
        <View className='bg-[#1f2937] rounded-md flex-row items-center p-4'>
          <Text className='text-[#acaeb8] mr-2'>✉️</Text>
          <TextInput
            placeholder='Email Address'
            placeholderTextColor='#acaeb8'
            className='flex-1 text-white'
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      <View className='w-full mb-4'>
        <View className='bg-[#1f2937] rounded-md flex-row items-center p-4'>
          <Text className='text-[#acaeb8] mr-2'>🔒</Text>
          <TextInput
            placeholder='Password'
            placeholderTextColor='#acaeb8'
            secureTextEntry={true}
            className='flex-1 text-white'
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        className='w-full bg-[#4ade80] rounded-md py-4 items-center justify-center mb-6'
      >
        <Text className='text-white font-bold text-lg'>
          Sign In <Text>➡️</Text>
        </Text>
      </TouchableOpacity>

      <View className='flex-row'>
        <Text className='text-[#acaeb8]'>Don't have an account? </Text>
        <TouchableOpacity>
          <Link href={"/signUp"} className='text-[#4ade80]'>
            Sign Up
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  )
}
