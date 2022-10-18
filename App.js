import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'

export default function App() {
  const [resultado, setResultado] = useState(0);
  const [contador, setContador] = useState(0);

  const array = (num) => {
    setContador((c) => c*10 + num )
  }

  const reset = (num) => {
    setContador(num)
    setResultado(num)
  }

  const CaF = () => {
    const far = ((contador * 1.8) + 32)
    setResultado(far + " °F")
  }

  const CaK = () => {
    const far = contador * 1 + 273.15
    setResultado(far + " °K")
  }

  const FaC = () => {
    const far = ((contador - 32) * 5)
    setResultado(far / 9 + " °C")
  }

  const FaK = () => {
    const far = ((contador - 32) * (5/9))
    setResultado(far + 273.15 + " °K")
  }

  const KaC = () => {
    setResultado(contador - 273.15 + " °C")
  }

  const KaF = () => {
    const far = ((contador - 273.15) * (9/5))
    setResultado(far + 32 + " °F")
  }

  return(
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#C8DBBE' />
        <Text style={styles.contador}>{ contador }</Text>
        <Text style={styles.resultadoTit}>Resultado</Text>
        <Text style={styles.resultado}>{ resultado }</Text>
    
    {/* opciones */}

    <View style={styles.subContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => array(9)}>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(8)}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(7)}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <View style={styles.butt}>
          <TouchableOpacity onPress={CaF} >
            <Text style={styles.text}>°C → °F</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => array(6)}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(5)}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(4)}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <View style={styles.butt}>
          <TouchableOpacity onPress={FaC} >
            <Text style={styles.text}>°F → °C</Text>
          </TouchableOpacity>
        </View>
        </View>

        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => array(3)}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(2)}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => array(1)}>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <View style={styles.butt}>
          <TouchableOpacity onPress={FaK} >
            <Text style={styles.text}>°F → °K</Text>
          </TouchableOpacity>
        </View>
          </View>
          
          <View style={styles.subContainer}>
            <TouchableOpacity style={styles.btnDou} onPress={() => array(0)}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnAC} onPress={() => reset(0)}>
              <Text style={styles.text}>AC</Text>
            </TouchableOpacity>
          </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7D3DF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    justifyContent: 'center',
    height: 96,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row-reverse',
    paddingVertical: 5
  },
  btn:{
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#D6EFED",
    borderRadius: 5,
    borderColor: "#665A48",
    margin: 8,
    
    fontFamily: 'arial'
  },
  btnAC: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#898AA6",
    borderRadius: 5,
    margin: 8,
    fontFamily: 'arial'
  },
  btnDou:{
    width: 246,
    height: 50,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#D6EFED",
    borderRadius: 5,
    margin: 8,
    fontFamily: 'arial'
  },
  text:{
    fontSize:20,
    color: 100,
    paddingHorizontal:10,
    fontFamily: 'arial'
  },
  linea:{
    width: '100%',
    paddingHorizontal:400,
    paddingVertical:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  butt:{
    width: 100,
    height: 52,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#C9BBCF",
    borderRadius: 5,
    margin: 8,
    fontFamily: 'arial'
  },
  resultadoTit:{
    textAlign: 'right',
    fontSize:20,
    color: '#D6EFED',
    width: '100%',
    paddingVertical: 2,
    paddingHorizontal: 47,
    marginBottom: 5,
    fontFamily: 'arial'
  },
  resultado:{
    textAlign: 'right',
    fontSize:30,
    color: '#D6EFED',
    width: '100%',
    paddingHorizontal: 47,
    marginBottom: 80,
    fontFamily: 'arial'
  },
  contador:{
    textAlign: 'right',
    fontSize:40,
    color: '#898AA6',
    width: '100%',
    paddingHorizontal: 47,
    marginBottom: 40,
    fontFamily: 'arial'
  },
});
