import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {WeatherStat} from '../Configs/WeatherStatuses';

const styles = StyleSheet.create({
    header:
    {
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    body:
    {
        flex:2,
        justifyContent:"flex-end",
        paddingHorizontal:40
    },
    bigComm:
    {
        fontSize:40
    },
    lowComm:
    {
        fontSize:20
    },
    Temp:
    {
        fontSize:80
    }
});
const Weather = ({condition, temperature, comment}) =>
{
    return(
        <View style={{backgroundColor:WeatherStat[condition].color,flex:1}}>
            <View style={styles.header}>
                <MaterialCommunityIcons size={120} name={WeatherStat[condition].icon} color="white"/>
                <Text style={styles.Temp}>{temperature}°</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bigComm}>{condition}<Text style={styles.lowComm}>-{comment}</Text></Text>
                <Text>{WeatherStat[condition].comment}</Text>
            </View>
        </View>
    );
}

export default Weather;
//alt+248 => °
