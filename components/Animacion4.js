import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  Text,
  Animated,
  View
} from 'react-native';

const Animacion4 = () => {
  const [animacion] =useState(new Animated.Value(0))// iniciamos esta animacion con valor 0

  useEffect(()=>{
    Animated.timing(
      animacion, {//componente a animar 
        toValue: 360, // valor al que llega
        duration:500, // duracion en milisegundos
        useNativeDriver:true
      }
    ).start(); //iniciar la animacion
  },[]);

  const interpolacion= animacion.interpolate({
    inputRange:[0,360],
    outputRange:['0deg','360deg']
  });

  const estiloAnimacion ={
    transform:[{ rotate: interpolacion}]
  }

  return (
    <View>
      <Animated.View 
        style={[styles.caja, estiloAnimacion]}
      >
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  caja: {
    width:100,
    height:100,
    backgroundColor:'cornflowerblue'
  }
 });

export default Animacion4
