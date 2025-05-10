import { View, Text, Image, FlatList } from "react-native"
import { Link } from "expo-router"
import ActivitiesCards from "../components/ui/ActivitiesCards"
import Footer from "../components/Footer/Footer"

export default function index() {
  return (
    <View className='flex-1'>
      <Image
        className='absolute h-1/3 w-full'
        source={require("../public/ImagenPrincipal.jpg")}
      />
      <View className='h-1/3 relative'>
        <View className='px-2 pr-8 bottom-0 absolute'>
          <Text className='text-white text-3xl font-bold'>
            Agenda tus
            <Text className='text-light-green font-bold'>
              {" "}
              actividades deportivas{" "}
            </Text>
            con facilidad
          </Text>
          <Text className='text-white'>
            Reserva salas, agenda clases y asegura tu lugar en nuestra sede
          </Text>
          <View className='flex flex-row w-full py-4 pr-4 gap-4'>
            <Link
              className='py-3 w-1/2 active:brightness-75 text-center rounded-lg bg-light-green active:bg-off-green'
              href={"/"}
            >
              Agenda ahora
            </Link>
            <Link
              className='py-3 w-1/2 active:brightness-75 text-center rounded-lg bg-white active:bg-off-green'
              href={"/logIn"}
            >
              Ingresar
            </Link>
          </View>
        </View>
      </View>

      <View className='flex-1 bg-black'>
        <View className='w-full'>
          <Text className='text-white text-2xl py-6 px-2 font-bold'>
            Actividades
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[1]}
            renderItem={() => (
              <View className='flex flex-row gap-4 px-2'>
                <ActivitiesCards title='Tennis'>
                  <Image
                    className='w-32 h-32 rounded-md'
                    source={require("../public/ClaseDeTenis.jpg")}
                  />
                </ActivitiesCards>
                <ActivitiesCards title='Yoga'>
                  <Image
                    className='w-32 h-32 rounded-md'
                    source={require("../public/ClasesDeYoga.jpg")}
                  />
                </ActivitiesCards>
                <ActivitiesCards title='Natacion'>
                  <Image
                    className='w-32 h-32 rounded-md'
                    source={require("../public/ClasesDeNatacion.jpg")}
                  />
                </ActivitiesCards>
                <ActivitiesCards title='Gimnasio'>
                  <Image
                    className='w-32 h-32 rounded-md'
                    source={require("../public/ClasesDeGimnasio.jpg")}
                  />
                </ActivitiesCards>
                <ActivitiesCards title='Baloncesto'>
                  <Image
                    className='w-32 h-32 rounded-md'
                    source={require("../public/ClasesDeBaloncesto.jpg")}
                  />
                </ActivitiesCards>
              </View>
            )}
          />
        </View>
      </View>
      <Footer />
    </View>
  )
}
