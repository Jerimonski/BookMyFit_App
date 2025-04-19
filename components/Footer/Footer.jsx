import { View } from "react-native"
import OptionFooter from "./components/OptionFooter"
import { HomeIcon, ExploreIcon, AddIcon, User2Icon } from "../Icons"

export default function Footer() {
  return (
    <View className='bg-dark-blue flex flex-row w-full'>
      <OptionFooter title='Home'>
        <HomeIcon />
      </OptionFooter>
      <OptionFooter title='Buscar'>
        <ExploreIcon />
      </OptionFooter>
      <OptionFooter title='Agendar'>
        <AddIcon />
      </OptionFooter>
      <OptionFooter title='Perfil'>
        <User2Icon />
      </OptionFooter>
    </View>
  )
}
