import { View } from "react-native"
import { Link } from "expo-router"
import YogaCard from "../components/SportCards/YogaCard"

export default function index() {
  return (
    <View>
      <YogaCard></YogaCard>
      <Link href='explore' className='bg-red-200'>
        go to explore
      </Link>
    </View>
  )
}
