import React from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { COLORS } from "@/constants/constants";

interface MusicSmallCompactProps {
    title: string;
    artist: string;
}

export function MusicSmallCompact({title, artist}: MusicSmallCompactProps) {
    return(
        <TouchableOpacity style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{gap:4}}>
                <Text style={{color:'white', fontSize: 16, fontWeight: 600}}>
                    {title}
                </Text>
                <Text style={{color: COLORS.lightGray}}>
                    {artist}
                </Text>
            </View>
            <SimpleLineIcons name="options-vertical" size={20} color={COLORS.lightGray} />
        </TouchableOpacity>
    )
}