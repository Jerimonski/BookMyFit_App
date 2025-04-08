import { View, Text } from "react-native"
import { Link } from "expo-router"
import YogaCard from "../components/SportCards/YogaCard"
import { useEffect, useState } from "react"
import axios from "axios"
// import api from "../ApiUsers.json"

export default function index() {
  const [data, setData] = useState([])
  const dataFetch = () => {
    return axios
      .get("https://apimocha.com/bookmyfit/Users")
      .then((response) => setData(response.data))
  }

  useEffect(() => {
    dataFetch()
  }, [])

  return (
    <View>
      <YogaCard></YogaCard>
      <Link href='explore' className='bg-red-200'>
        go to explore
      </Link>
      {data &&
        data.map((users, index) => (
          <View key={index}>
            <Text>{users.name}</Text>
          </View>
        ))}
    </View>
  )
}
