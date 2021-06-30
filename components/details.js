import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'

export default function WeatherInfo(props,unit) {
    const data = props.props
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data.name}</Text>
            <View>
                <Image style={styles.icon} source={{uri: icon}} />
            </View>
            <Text style={styles.temperature}>{data.main.temp}{props.unit=="metric"?"°C":props.unit=="imperial"?"°F":"K"}</Text>
            <Text style={styles.text}>{data.weather[0].description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        width: 110,
        height: 110,
    },
    text:{
        fontSize: 18,
        textTransform: 'capitalize'
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    temperature:{
        fontSize:40,
        color: '#ee0040',
        marginTop: -20
    }
});
