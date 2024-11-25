import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text, Image } from 'react-native'
import { ScrollView } from "react-native";

export function MusicMedium({ title, image, artist }: any) {
    return (
            <View style={{ flexDirection: 'column', width: 154 }}>
                <Image
                    style={{ height: 154, width: 154, borderRadius: 8 }}
                    source={image ? { uri: image } : require('../../assets/images/icon.png')}
                />
                <View style={{ flex: 1, marginTop: 20, gap: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }} numberOfLines={1}>
                        {title}
                    </Text>
                    <Text style={{ color: COLORS.gray, fontWeight: 'bold' }} numberOfLines={2}>
                        {artist}
                    </Text>
                </View>
            </View >
    )
}