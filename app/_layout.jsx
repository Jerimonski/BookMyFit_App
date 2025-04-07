import "../global.css"
import { Drawer } from "expo-router/drawer"
import { Image } from "react-native"
import { DrawerToggleButton } from "@react-navigation/drawer"
import CustomDrawerContent from "../components/Drawer/CustomDrawerContent"

export default function Layout() {
  return (
    <Drawer
      className='flex-1'
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        headerTitle: "BookMyFit",
        drawerPosition: "right",
        headerLeft: () => (
          <Image
            className='w-12 h-12'
            source={require("../public/LogoBookMyFit.png")}
          />
        ),
        headerRight: () => (
          <DrawerToggleButton tintColor='white' style={{ marginRight: 10 }} />
        ),
      }}
    />
  )
}
