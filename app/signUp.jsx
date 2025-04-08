import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { Link } from "expo-router"
import api from "../ApiUsers.json"

export default function SignUp() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = () => {
    const userExists = api.users.some(
      (u) => u.userEmail.toLowerCase() === email.toLowerCase()
    )

    if (userExists) {
      Alert.alert("Ya existe 🛑", "Este correo ya está registrado")
      return
    }

    // Simulación local del registro exitoso (sin guardar el json)
    Alert.alert("¡Registrado! 🎉", "Inicia sesión ahora~ 💖")
  }

  return (
    <View className='flex-1 bg-[#111827] items-center justify-center p-6'>
      <View className='bg-[#4ade80] rounded-full w-16 h-16 items-center justify-center mb-6'>
        <Text className='text-white text-xl font-bold'>SC</Text>
      </View>

      <Text className='text-white text-3xl font-bold mb-2'>Create Account</Text>
      <Text className='text-[#acaeb8] mb-8'>
        Sign up to join the SportsCenter family 💪
      </Text>

      <View className='w-full mb-4'>
        <View className='bg-[#1f2937] rounded-md flex-row items-center p-4'>
          <Text className='text-[#acaeb8] mr-2'>✉️</Text>
          <TextInput
            placeholder='User name'
            placeholderTextColor='#acaeb8'
            className='flex-1 text-white'
            value={userName}
            onChangeText={setUserName}
          />
        </View>
      </View>

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
        onPress={handleSignUp}
        className='w-full bg-[#4ade80] rounded-md py-4 items-center justify-center mb-6'
      >
        <Text className='text-white font-bold text-lg'>
          Sign Up <Text>📝</Text>
        </Text>
      </TouchableOpacity>

      <View className='flex-row'>
        <Text className='text-[#acaeb8]'>Already have an account? </Text>
        <TouchableOpacity>
          <Link href={"/logIn"} className='text-[#4ade80]'>
            Log In
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  )
}
