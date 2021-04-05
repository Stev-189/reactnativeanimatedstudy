import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  Text,
  Animated,
  View
} from 'react-native';

const Animacion3 = () => {
  const [animacion] =useState(new Animated.Value(14))// iniciamos esta animacion con valor 0

  useEffect(()=>{
    Animated.timing(
      animacion, {//componente a animar 
        toValue: 40, // valor al que llega
        duration:500, // duracion en milisegundos
        useNativeDriver:false
      }
    ).start(); //iniciar la animacion
  },[]);

  return (
    <View>
      <Animated.Text style={[styles.texto, {fontSize: animacion}]}
       >
         Animacion 1</Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  texto: {
    fontSize:30,
    textAlign:'center',
  }
 });

export default Animacion3
