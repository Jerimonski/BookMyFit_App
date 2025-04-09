import "../global.css"
import { Drawer } from "expo-router/drawer"
import { Image } from "react-native"
import { DrawerToggleButton } from "@react-navigation/drawer"
import CustomDrawerContent from "../components/Drawer/CustomDrawerContent"
import { UserProvider } from "../context/UserContext"

export default function Layout() {
  return (
    <UserProvider>
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
              className='mx-4 w-12 h-12'
              source={require("../public/LogoBookMyFit.png")}
            />
          ),
          headerRight: () => (
            <DrawerToggleButton tintColor='white' style={{ marginRight: 10 }} />
          ),
        }}
      />
    </UserProvider>
  )
}
