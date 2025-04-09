import { View, Text } from "react-native"
import React from "react"

export default function StatsView() {
  return (
    <View className='border-[#333333] border-b flex-row py-4'>
      <View className='flex-1'>
        <Text className='text-light-green font-bold text-2xl text-center'>
          12
        </Text>
        <Text className='text-secondary-text text-sm text-center'>Booking</Text>
      </View>
      <View className='flex-1 border-x-2 border-[#333333]'>
        <Text className='text-light-green font-bold text-2xl text-center'>
          12
        </Text>
        <Text className='text-secondary-text text-sm text-center'>
          Activities
        </Text>
      </View>
      <View className='flex-1'>
        <Text className='text-light-green font-bold text-2xl text-center'>
          12
        </Text>
        <Text className='text-secondary-text text-sm text-center'>Points</Text>
      </View>
    </View>
  )
}
