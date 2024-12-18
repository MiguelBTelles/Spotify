import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import { ScrollView } from "react-native";

interface MusicMediumProps {
    title?: string
    image: any
    artist: string
    onPress?: any
}

export function MusicMedium({ title, image, artist, onPress }: MusicMediumProps) {
    return (
            <TouchableOpacity onPress={onPress} style={{ width: 154 }}>
                <Image
                    style={{ height: 154, width: 154, borderRadius: 8 }}
                    source={image ? { uri: image } : require('../../assets/images/icon.png')}
                />
                <View style={{ flex: 1, marginTop: 10, gap: 5 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={{ color: COLORS.lightGray,}} numberOfLines={2}>
                     {artist}
                    </Text>
                </View>
            </TouchableOpacity >
    )
}