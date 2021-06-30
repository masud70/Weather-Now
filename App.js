import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/details';
import UnitPicker from './components/UnitPicker';
import WeatherDetails from './components/WeatherDetails';

const API = '7045ebf781e9c1f2cdf617e12341b585';

export default function App() {

  const [error,setError] = useState(null)
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState('metric');

  useEffect( ()=>{
    loadLocation()
  }, [unit] )

  async function loadLocation(){
    try{
      let {status} = await Location.requestBackgroundPermissionsAsync()

      if(status !== 'granted'){
        setError('Location access is needed to run this App!')
        return
      }

      const location = await Location.getCurrentPositionAsync()
      const {longitude, latitude} = location.coords
      const url =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=${unit}`
      const response = await fetch(url)
      const data = await response.json()

      if(response.ok){
        setWeather(data)
      }else{
        setError(data.message)
      }
    }catch(error){
      setError(error)
    }
  }

  if(weather){
  return (
      <View style={styles.container}>
        <UnitPicker unit={unit} setUnit={setUnit}/>
        <WeatherInfo props={weather} unit={unit} />
        <WeatherDetails props={weather} unit={unit} />
        <StatusBar style="auto" />
      </View>
    )
  }else if(error){
    return (
      <View style={styles.container}>
        <Text>Error {error}</Text>
        <StatusBar style="auto" />
      </View>
    )
  }else{
    return (
      <View style={styles.container}>
        <ActivityIndicator size={60} color="red"/>
        <StatusBar style="auto" />
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbfff8',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
});
