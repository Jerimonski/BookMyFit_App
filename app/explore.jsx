import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router"

export default function Explore() {
  return (
    <ScrollView>
      <Text className='bg-blue-300'>explore</Text>
      <Link href='/'>go to Home</Link>
    </ScrollView>
  )
}
