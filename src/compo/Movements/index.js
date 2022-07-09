import React,{useState} from 'react';
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function Movements({data}) {
    const [showValue, setShowValue] = useState(false);
 return (
   <TouchableOpacity style={styles.container} onPress={()=> setShowValue (!showValue)}>
            <Text style={styles.date}>{data.date}</Text>

         <view style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
            { showValue ? (
                <Text style={data.type === 1 ? styles.value : styles.gastos}>
                {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.gastos}` }
               </Text>
            ):(
            <View style={styles.borao}>

            </View>
            )}
         </view>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
container:{
flex:1,
marginBottom:24,
borderBottomWidth:0.5,
borderBottomColor: '#DADADA'
},
content:{
 flexDirection: 'row',
 justifyContent:'space-between',
 marginTop:2,
 marginBottom:8,

  
},
date:{
    color: '#DADADA',
    fontWeight: 'bold'
}, 
label:{
fontWeight:'bold',
fontSize:17,
},
value:{
    fontSize:16,
    color:'#2ecc71',
    fontWeight:'bold'
},
gastos:{
    fontSize:16,
    color:'#e74c3c',
    fontWeight:'bold'
},
borao:{
    marginTop: 6,
    width: 80,
    height:10,
    backgroundColor:'#DADADA',
    borderRadius: 8,
},

})