import axios from "axios"
import { useEffect, useState } from "react"

export default function useUsers() {
  const [user, setUser] = useState([])

  const fetchData = () => {
    return axios
      .get("https://apimocha.com/bookmyfit/Users")
      .then((response) => setUser(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { user }
}
