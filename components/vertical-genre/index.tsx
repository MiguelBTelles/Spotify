import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

export function VerticalGenre({ imageBackground, genre }: any) {
    return (
        <TouchableOpacity style={{
            marginHorizontal: 10, marginTop: 20, gap: 10
        }}>
            <ImageBackground
                style={{
                    height: 200,
                    width: 110,
                    justifyContent: 'flex-end',
                    borderRadius: 8,
                    overflow: 'hidden'
                }}
                source={imageBackground ? { uri: imageBackground } : require("../../assets/images/icon.png")}
            >
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 10,
                        color: 'white',
                        marginBottom: 10,
                        fontWeight: 800
                    }}>
                        {genre}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
