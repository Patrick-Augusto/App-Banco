import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

export default function Balance({saldo,gastos}) {
 return (
     <view style={styles.container}>
         <view style={styles.item}>
              <Text style={styles.itemTitle}>Saldo</Text>
             <view style={styles.content}>  
                  <Text style={styles.real}> R$</Text>
            <Text style={styles.saldo}>{saldo}</Text>
             </view>
         </view>
     </view>,

<view style={styles.item}>
     <Text style={styles.itemTitle}>Gastos</Text>
    <view style={styles.content}>  
         <Text style={styles.real}> R$</Text>
   <Text style={styles.gastos}>{gastos}</Text>
    </view>
</view>
  );
}

const styles = StyleSheet.create({
 container:{
  backgroundColor: '#FFF',
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingStart:18,
  paddingEnd:18,
  marginTop: -24,
  marginStart:14,
  marginEnd:14,
  borderRadius:4,
  paddingTop:22,
  paddingBottom:22,
  zIndex:99,
 },
 itemTitle:{
   fontSize:20,
   color:'#DADADA'
 },
 content:{
    flexDirection: 'row',
    alignItems:'center',

 },
 
 real:{
   color:'#DADADA',
   marginRight: 6,
 },
  saldo:{
   fontSize:22,
   color:'#2ecc71'
  },
  gastos: {
    fontSize:22,
    color:'#e74c3c'
  },
})