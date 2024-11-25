import React from "react";
import { View, Image, Text } from 'react-native';
import { COLORS } from "@/constants/constants";

export function MusicCompact({ title, image, playlistCreator }) {
    return (
        <View style={{width: 100, marginTop: 20 }}>
        <Image
            style={{ height: 100, width: 100, borderRadius: 8 }}
            source={image ? { uri: image } : require('../../assets/images/icon.png')}
        />
        <View style={{ marginTop: 10, gap: 5, width: 100 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }} numberOfLines={1}>
                {title}
            </Text>
            <Text style={{ color: COLORS.lightGray, fontWeight: 'Nunito' }} numberOfLines={1}>
                Playlist • {playlistCreator}
            </Text>
        </View>
    </View >
    )
}