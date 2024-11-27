import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

export function HorizontalGenre({ background, genre }: any) {
    return (
        <TouchableOpacity style={{ marginHorizontal: 10, gap: 8, flex: 1}}>
            <View
                style={{ height: 100, borderRadius: 8, overflow: 'hidden', paddingVertical:10, paddingHorizontal: 8,
                    backgroundColor: background
                }}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>
                    {genre}
                </Text>
            </View>
        </TouchableOpacity>
    )
}