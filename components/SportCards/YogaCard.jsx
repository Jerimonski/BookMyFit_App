import { Link } from "expo-router"
import { Text, View, Pressable, ScrollView } from "react-native"

export default function YogaCard() {
  return (
    // this is for sparta and for details
    <Link asChild href={`/book`}>
      <Pressable>
        {({ pressed }) => (
          <Text className={`${pressed ? "bg-blue-950" : "bg-blue-300"}`}>
            YogaCard
          </Text>
        )}
      </Pressable>
    </Link>
  )
}
