import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { useRouter } from "expo-router"
import axios from "axios"
import useUsers from "../components/hooks/useUsers"
import { useUserContext } from "../context/UserContext"
import { API_URL } from "@env"

export default function AuthScreen() {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRegisterMode, setIsRegisterMode] = useState(false)
  const { users } = useUsers()
  const { setCurrentUser } = useUserContext()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAuth = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)

    if (!email || !password || (isRegisterMode && !userName)) {
      Alert.alert("¡Ups! 😢", "Por favor, completa todos los campos")
      setIsSubmitting(false)
      return
    }

    if (isRegisterMode) {
      const userExists = users.some(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      )

      if (userExists) {
        Alert.alert("Ya existe 🛑", "Este correo ya está registrado")
        setIsSubmitting(false)
        return
      }

      const newUser = {
        nombre: userName,
        email,
        contraseña: password,
      }

      try {
        const response = await axios.post(API_URL, newUser)

        if (response.status === 201 || response.status === 200) {
          Alert.alert("¡Registrado! 🎉", "Ahora inicia sesión")
          setIsRegisterMode(false)
          setUserName("")
          setEmail("")
          setPassword("")
        }
      } catch (error) {
        console.error("Error al registrar:", error)
        Alert.alert("Uy 😢", "Error al registrarse, inténtalo de nuevo")
      } finally {
        setIsSubmitting(false)
      }
    } else {
      const user = users.find(
        (u) =>
          u.email.toLowerCase() === email.toLowerCase() &&
          u.contraseña === password
      )

      if (user) {
        setCurrentUser(user)
        Alert.alert("Bienvenido", `Hola ${user.nombre} ✨`)
        router.replace("/")
      } else {
        Alert.alert("Oops 😢", "Correo o contraseña incorrectos")
      }
      setIsSubmitting(false)
    }
  }

  return (
    <View className='flex-1 bg-[#111827] items-center justify-center p-6'>
      <View className='bg-[#4ade80] rounded-full w-16 h-16 items-center justify-center mb-6'>
        <Text className='text-white text-xl font-bold'>BMF</Text>
      </View>

      <Text className='text-white text-3xl font-bold mb-2'>
        {isRegisterMode ? "Crear una cuenta" : "Bienvenido de vuelta"}
      </Text>
      <Text className='text-[#acaeb8] mb-8'>
        {isRegisterMode
          ? "Registrate para formar parte de la casa deportista 💪"
          : "Introduce tus datos de usuario para continuar"}
      </Text>

      {isRegisterMode && (
        <View className='w-full mb-4'>
          <View className='bg-[#1f2937] rounded-md flex-row items-center p-4'>
            <Text className='text-[#acaeb8] mr-2'>🧑</Text>
            <TextInput
              placeholder='Nombre de usuario'
              placeholderTextColor='#acaeb8'
              className='flex-1 text-white'
              value={userName}
              onChangeText={setUserName}
            />
          </View>
        </View>
      )}

      <View className='w-full mb-4'>
        <View className='bg-[#1f2937] rounded-md flex-row items-center p-4'>
          <Text className='text-[#acaeb8] mr-2'>✉️</Text>
          <TextInput
            placeholder='Correo electronico'
            placeholderTextColor='#acaeb8'
            className='flex-1 text-white'
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
          />
        </View>
      </View>

      <View className='w-full mb-4'>
        <View className='bg-[#1f2937] rounded-md flex-row items-center p-4'>
          <Text className='text-[#acaeb8] mr-2'>🔒</Text>
          <TextInput
            placeholder='Contraseña'
            placeholderTextColor='#acaeb8'
            secureTextEntry={true}
            className='flex-1 text-white'
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={handleAuth}
        disabled={isSubmitting}
        className='w-full bg-[#4ade80] rounded-md py-4 items-center justify-center mb-4'
      >
        <Text className='text-white font-bold text-lg'>
          {isRegisterMode ? "Registrarse 📝" : "Ingresar ➡️"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsRegisterMode(!isRegisterMode)}>
        <Text className='text-[#acaeb8]'>
          {isRegisterMode
            ? "¿Ya tienes una cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
