import { View } from "react-native"
import App from "../App"
import Header from "../components/Header/Header"
import { Link } from "expo-router"

export default function index() {
  return (
    <View>
      <Header></Header>
      <Link href='explore'>go to explore</Link>
    </View>
  )
}
