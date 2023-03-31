import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View } from 'react-native'

const locationsOfMarks = [
  {
    title: 'MarcoZero',
    location: {
      latitude: -8.0631,
      longitude: -34.8711,
    },
    description: 'Marco zero Mark',
  },
  {
    title: 'Mercado da madalena',
    location: {
      latitude: 8.05233993541675,
      longitude: -34.90872263510473,
    },
    description: 'Mercado da madalena Mark',
  },
]

export default function MapTeste() {
  const showLocations = () => {
    return locationsOfMarks.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      )
    })
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} {...showLocations()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
