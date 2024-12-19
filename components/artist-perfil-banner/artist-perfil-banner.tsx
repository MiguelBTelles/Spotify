import React from "react";
import { View,Image, Text } from 'react-native';

interface ArtistPefilBannerProps {
    name: string
    image: any
}

export function ArtistPefilBanner({name, image}: ArtistPefilBannerProps) {
    return(
        <View style={{
        }}>
            <Image  style={{
                width: '100%',
                height: 260,
                position: 'relative'
            }}
            source={image ? { uri: image } : require('../../assets/images/icon.png')}
            />
            <Text style={{
                position: 'absolute',
                fontSize: 50,
                fontWeight: 800,
                color: 'white',
                top: 180,
                left: 10
            }}>
                {name}
            </Text>
        </View>
    )
}