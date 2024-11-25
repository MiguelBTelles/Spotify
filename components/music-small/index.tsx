import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Image, Text } from "react-native";

export function MusicSmall({title, image}: any) {
    return(
        <View style={{  
            gap:12, flex: 1, backgroundColor: COLORS.gray, 
            borderRadius: 8, flexDirection: 'row', alignItems: 'center', 
            
            }}>
            <Image 
                style={{height: 60, width: 60, borderRadius: 8}}
                source={image ? {uri:image} : require('../../assets/images/icon.png')}
            />  
            <View style={{flex: 1}}>

                <Text style={{color:'white', flexWrap: 'wrap', fontWeight: 'bold' }} ellipsizeMode="tail" numberOfLines={2}>
                    {title}
                </Text>
            </View>
        </View>
    )
}