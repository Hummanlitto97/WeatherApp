import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const Loading = () =>
{
    const kinta = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animacija();
    },[]);

    const Animacija = () => 
    {
        Animated.sequence([
            Animated.timing(kinta,
                {
                    toValue:300,
                    duration:4000
                }),
            Animated.timing(kinta,
                {
                    toValue:20,
                    duration:2000
                })
        ]).start(() => {Animacija()});
    }

    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Animated.View style={{height:kinta,width:kinta,backgroundColor:"red"}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Animated.Text style={{color:"white",fontSize:14}}>Loading</Animated.Text>
                </View>
            </Animated.View>
        </View>
    );
}

export default Loading;
