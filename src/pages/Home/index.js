import React from 'react';
import { View,StyleSheet,Text, FlatList} from 'react-native';
import Header from '../../compo/Header';
import Balance from '../../compo/Header/Balance';
import Movements from '../../compo/Movements';
import Actions from '../../compo/Actions';

const list = [
{
id: 1,
label:'Supreme',
value: '1350,00',
date: '17/04/2022',
type: 0 //gastos
},
{
  id: 2,
  label:'Pix LIGA',
  value: '1500,00',
  date: '15/04/2022',
  type: 1 //ganhos
  },

  {
    id: 3,
    label:'Balenciaga',
    value: '2.000,00',
    date: '5/04/2022',
    type: 0 //gastos
    },
]

export default function Home() {
 return (
    <view style ={styles.tela}> 
        <Header name ="Patrick augusto"/>
            <Balance saldo="17.789,90" gastos="2.678,90"/>
             
            <Actions/>

   <text style={styles.title}>Ultimas movimentações</text>
   <FlatList
   style={styles.list}
   data={list}
   keyExtractor={(item)=> String(item.id)}
   showsVerticalScrollIndicator={false}
   renderItem={({item})=> <Movements data={item}/>}
   />
    </view>
  );
}

const style = StyleSheet.create ({

  tela: {
    flex: 1, 
    backgroundColor:'#FFF'

    },
    title:{
      fontSize: 18,
      fontWeight:'bold',
      margin:14,

    },
    list:{
      marginStart:15,
      marginEnd:15,

    },
});