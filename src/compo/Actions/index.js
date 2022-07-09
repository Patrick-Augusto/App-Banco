import React from 'react';
import { View , Text, TouchableOpacity,StyleSheet,ScrollView} from 'react-native';

import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={StyleSheet.container} horizontal={true} showsHorizontalScrollIndicator={false}>
  
   <TouchableOpacity style={styles.actionsButton}>
        <View style={styles.areaButton}>
          <AntDesign name='addfolder' size={26} color="#000"/>
        </View>
        <Text style={styles.buttonlabel}>
            Entradas 
        </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.actionsButton}>
        <View style={styles.areaButton}>
          <AntDesign name='tagso' size={26} color="#000"/>
        </View>
        <Text style={styles.buttonlabel}>
            Faturas
        </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.actionsButton}>
        <View style={styles.areaButton}>
          <AntDesign name='creditcard' size={26} color="#000"/>
        </View>
        <Text style={styles.buttonlabel}>
            Cartão
        </Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.actionsButton}>
        <View style={styles.areaButton}>
          <AntDesign name='barcode' size={26} color="#000"/>
        </View>
        <Text style={styles.buttonlabel}>
            Boletos 
        </Text>
   </TouchableOpacity>


   <TouchableOpacity style={styles.actionsButton}>
        <View style={styles.areaButton}>
          <AntDesign name='setting' size={26} color="#000"/>
        </View>
        <Text style={styles.buttonlabel}>
            Configurações 
        </Text>
   </TouchableOpacity>

   </ScrollView>
  );
}
const styles = StyleSheet.create ({
    container:{
         maxHeight: 84,
        marginBottom:14,
        marginTop: 18,
        paddingEnd:14,
        paddingStart: 14,
    },
    actionsButton:{
       alignItems:'center',
       marginRight:32, 

    },
    areaButton:{
      backgroundColor: '#ecf0f1',
      height:60,
      width: 60,
      borderRadius:30,
      justifyContent: 'center',
      alignItems:'center'

    },
    buttonlabel: {
      marginTop:4,
      textAlign: 'center',
      fontWeight: 'bold'
    }
})