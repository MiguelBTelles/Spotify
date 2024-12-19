import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text, Image, TouchableOpacity} from 'react-native';

export function  SquareFile({image, title, fileType, artist, numberOfMusics,}: any) {
    return(
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12
        }}>
            <Image 
            style={{
                width: 70,
                height: 70
            }}
            source={image ? { uri: image } : require('../../assets/images/icon.png')}
            />
            <View>
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 700
                }}>
                    {title}
                </Text>
                <Text style={{
                    color: COLORS.lightGray,
                    fontSize: 12
                }}>
                    {fileType} • {artist} {numberOfMusics}
                </Text>
            </View>
        </TouchableOpacity>
    )
}