import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

export default function WeatherDetails(weather,unit) {
    const data = weather.props;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(data.sys.country)
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(data.sys.country)
    return (
        <View style={styles.main}>
            <View style={styles.innerView}>
                <View style={styles.finalView}>
                    <FontAwesome5 name="sun" size={22} color={"red"}/>
                    <Text style={{fontSize:17}}> Sunrise: {'\n'} {sunrise} AM</Text>
                </View>
                <View style={styles.finalView}>
                    <FontAwesome5 name="star" size={22} color={"red"}/>
                    <Text style={{fontSize:17}}> Sunset: {'\n'} {sunset} PM</Text>
                </View>
            </View>
            <View style={styles.innerView}>
                <View style={styles.finalView}>
                    <FontAwesome5 name="temperature-low" size={22} color={"red"}/>
                    <Text style={{fontSize:17}}> Feels Like: {'\n'} {data.main.feels_like}°</Text>
                </View>
                <View style={styles.finalView}>
                    <FontAwesome5 name="tint" size={22} color={"red"}/>
                    <Text style={{fontSize:17}}> Humidity: {'\n'} {data.main.humidity}%</Text>
                </View>
            </View>
            <View style={styles.innerView}>
                <View style={styles.finalView}>
                    <FontAwesome5 name="wind" size={22} color={"red"}/>
                    <Text style={{fontSize:17}}> Wind Speed: {'\n'} {data.wind.speed}</Text>
                </View>
                <View style={styles.finalView}>
                    <FontAwesome5 name="tachometer-alt" size={22} color={"red"}/>
                    <Text style={{fontSize:17}}> Pressure: {'\n'} {data.main.pressure} hPa</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        margin: 15,
        borderRadius: 8,
        width: "95%",
        flexDirection: 'column',
    },
    innerView:{
        width: "100%",
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    finalView:{
        width: "50%",
        height: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderColor: '#b6b8b8',
        borderWidth:1,
        borderRadius: 5,
    }
})
