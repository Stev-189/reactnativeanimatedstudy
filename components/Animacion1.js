import React, {useState, useEffect} from 'react'
import {
  StyleSheet,
  Text,
  Animated,
  View
} from 'react-native';

const Animacion1 = () => {
  const [animacion] =useState(new Animated.Value(0))// iniciamos esta animacion con valor 0

  useEffect(()=>{
    Animated.timing(
      animacion, {//componente a animar 
        toValue: 1, // valor al que llega
        duration:1000, // duracion en milisegundos
        useNativeDriver:true
      }
    ).start(); //iniciar la animacion
  },[]);

  return (
    <Animated.View 
      style={{
        opacity:animacion//en este caso la opacidad ira de 0 a 1
      }}
    >
      <Text style={styles.texto} >Animacion 1</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  texto: {
    fontSize:30,
    textAlign:'center',
  }
 });

export default Animacion1
