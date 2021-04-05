import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableWithoutFeedback
} from 'react-native';

const Animacion5 = () => {

  const [animacion]=useState(new Animated.Value(1))

  const presionarBtn=_=>{
    Animated.spring(animacion,{
      toValue:.8,
      useNativeDriver:true
    }).start()
  }

  const soltarBtn=_=>{
    Animated.spring(animacion,{
      toValue:1,
      friction:4, // controla su rebote mientras mas bajo mayuor revote default 7
      tension:30, //tencion dle movimiento o duro 
      useNativeDriver:true
    }).start()
  }

  const estiloAnimacion={
    transform:[{scale:animacion}]
  }


  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={()=>presionarBtn()}
        onPressOut={()=>soltarBtn()}
      >
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    alignItems:'center'
  },
  btn:{
    alignItems: 'center',
    backgroundColor:'cornflowerblue',
    height:80,
    justifyContent: 'center',
    width:280,
  },
  texto:{
    color:'#FFF',
    fontSize:28,
    fontWeight:'bold',
    textTransform:'uppercase',
  },

})

export default Animacion5
