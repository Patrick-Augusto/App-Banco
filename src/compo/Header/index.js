import React from 'react';
import { View,StyleSheet,Text,StatusBar,TouchableOpacity,Dimensions, } from 'react-native';
import { Feather} from '@expo/vector-icons'
const width = Dimensions.get('screen').width
export default function Header({name}) {
    
 return (
   <view style={styles.contaiener}>
     <view style={styles.content}>
        <Text style={styles.username}>{name}</Text>
        
        <TouchableOpacity   activeOpacity={0.9}  style={styles.botao}>
           <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>
     </view>
   </view>
  );
}


const styles = StyleSheet.create({

    contaiener: {
        flex: 1, 
        width:"100%",
        height: 450/970* width,
        backgroundColor:'#39ff14',
        paddingTop: 18,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16, 
        paddingBottom: 44,
        
        },
        content: {
            flex:1,
            alignItems:'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        username:{
            fontSize:18,
            color: '#FFF',
            fontWeight:'bold',

        },
        botao:{
            width: 44,
            height: 44,
            backgroundColor: 'rgba(255,255,255,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 44 /2 
        }
    });