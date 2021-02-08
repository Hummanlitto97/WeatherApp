import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Weather from './Screens/Weather';
import Loading from './Screens/Loading';
import {APIKey} from './Configs/APIKey';

const App = () => 
{
  const isLoading = useState(true);
  const isError = useState(null);
  const states = useState(
  {
    temperature:0,
    weatherCondition:"None",
    comment:"Not working"
  });
  
  function getWeather(lat = 0, long = 0)
  {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKey}&units=metric`)
    .then((response) => {return response.json()})
    .then((json) => 
    {
      states[1]({
        temperature:json.main.temp,
        weatherCondition:json.weather[0].main,
        comment:json.weather[0].description
      });
      isLoading[1](false);
    })
    .catch((error) => 
    {
      isError[1]("Error: Couldn't fetch information");
    });
  }

  useEffect(() => 
  {
    navigator.geolocation.getCurrentPosition(
    (position) => 
    {
      getWeather(position.coords.latitude,position.coords.longitude);
    },
    (error) => 
    {
      isError[1]("Error: Didn't get a permission to use your location");
    });
  },[]);





  return (
    <View style={styles.container}>
      {isLoading[0] ? 
      (<Loading/>) 
      : 
      (isError[0] ? 
      (<Text>{isError[0]}</Text>) 
      : 
      (<Weather temperature={states[0].temperature} comment={states[0].comment} condition={states[0].weatherCondition}/>))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;
