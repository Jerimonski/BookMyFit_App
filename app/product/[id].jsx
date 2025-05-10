import { useLocalSearchParams } from "expo-router"
import { View, Text, Image } from "react-native"
import Footer from "../../components/Footer/Footer"

const imageMap = {
  Tennis: require("../../public/ClaseDeTenis.jpg"),
  Natacion: require("../../public/ClasesDeNatacion.jpg"),
  Baloncesto: require("../../public/ClasesDeBaloncesto.jpg"),
  Yoga: require("../../public/ClasesDeYoga.jpg"),
  Gimnasio: require("../../public/ClasesDeYoga.jpg"),
}

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams()
  const SportsInfo = {
    Tennis: {
      title: "Tennis",
      description: `Reserva tu clase de tenis y mejora tu técnica en nuestras canchas profesionales. 
        Con entrenadores expertos y horarios flexibles, te ofrecemos una experiencia 
        personalizada para todos los niveles. ¡Asegura tu lugar y vive la emoción del tenis!`,
    },
    Natacion: {
      title: "Natacion",
      description: `Agenda tu clase en nuestra piscina olímpica y mejora tu nivel con programas 
      adaptados a cada etapa del aprendizaje. Desde seguridad en el agua hasta técnica avanzada, 
      todo está listo para que reserves tu espacio y nades con confianza.`,
    },
    Baloncesto: {
      title: "Baloncesto",
      description: `Reserva tu cancha y únete a partidas emocionantes o entrenamientos guiados 
      por expertos. Nuestro sistema de agendamiento te permite acceder fácilmente a horarios 
      disponibles, ya sea para jugar entre amigos o practicar en ligas competitivas.`,
    },
    Yoga: {
      title: "Yoga",
      description: `Agenda tu sesión de yoga e  n un ambiente diseñado para el equilibrio y la serenidad.
      Ofrecemos clases en distintos horarios y niveles, guiadas por instructores certificados. 
      Reserva fácilmente y transforma tu día con bienestar y tranquilidad.`,
    },
    Gimnasio: {
      title: "Gimnasio",
      description: `Activa tu cuerpo y mente en nuestro gimnasio diseñado para potenciar tu energía y vitalidad. 
      Contamos con una variedad de clases y equipos para todos los niveles, dirigidos por instructores expertos. 
      Reserva tu espacio de forma sencilla y experimenta la transformación a través del movimiento y la fuerza.`,
    },
  }
  const sport = SportsInfo[id]
  return (
    <View className='flex-1 h-full'>
      <Text>{sport.title}</Text>
      <Image className='w-48 h-48' source={imageMap[id]} />
      <Text>{sport.description}</Text>
      <Footer />
    </View>
  )
}
