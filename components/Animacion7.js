import React, {useEffect, useState} from 'react'
import {
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableWithoutFeedback
} from 'react-native';

const Animacion7 = () => {

  const [animaciones1]=useState(new Animated.Value(0))
  const [animaciones2]=useState(new Animated.Value(1))

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animaciones1,{
        toValue:300,
        duration:1000,
        useNativeDriver:true
      }),
      Animated.spring(animaciones2,{
        toValue:10,
        useNativeDriver:true
      }),
      Animated.spring(animaciones2,{
        toValue:1,
        useNativeDriver:true
      })
    ]).start();
  }, [])

  const estiloAnimacion={
    transform:[
      {translateY: animaciones1},
      {scale: animaciones2}
    ]
  }

  return (
    <View>
      <Animated.View
        style={[
          styles.caja,
          estiloAnimacion
        ]}
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

export default Animacion7
