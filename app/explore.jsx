import { Pressable, ScrollView, Text } from "react-native"
import { Link } from "expo-router"
import { HomeIcon } from "./../components/Icons"

export default function explore() {
  return (
    <ScrollView>
      <Link asChild href='/'>
        <Pressable>
          {({ pressed }) => (
            <HomeIcon className={`${pressed ? "bg-red-400" : "bg-blue-300"}`} />
          )}
        </Pressable>
      </Link>
      <Text>asdsadsadsadsadsad</Text>
    </ScrollView>
  )
}
