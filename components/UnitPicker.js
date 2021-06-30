import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({unit,setUnit}) {
    return (
        <View style={styles.unitsSystem}>
            <Picker
                selectedValue={unit}
                onValueChange={(item) => setUnit(item)}
                mode="dropdown"
                itemStyle={{ fontSize: 16,padding: 0 }}
            >
                <Picker.Item label="C°" value="metric" />
                <Picker.Item label="F°" value="imperial" />
                <Picker.Item label="K" value="standard" />
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        ...Platform.select({
            android: {
                top: 30,
            },
        }),

        left: 20,
        height: 50,
        width: 100,
    },
})

