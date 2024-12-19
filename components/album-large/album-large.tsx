import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

interface AlbumLargeProps {
    albumCoverUri: string
    AlbumName: string
    albumType: string
}

export function AlbumLarge({ albumCoverUri, AlbumName, albumType }: AlbumLargeProps) {
    return (
        <TouchableOpacity style={{
            marginBottom: 20,
        }}>
            <ImageBackground
                source={{ uri: albumCoverUri }}
                style={{
                    width: '100%',
                    height: 220,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 5,
                    position: 'relative',
                    gap: 8
                }}
                imageStyle={{ borderRadius: 10 }}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: 10,
                }} />
            </ImageBackground>
            <View style={{
                flexDirection: 'row',
                position: 'absolute',
                top: 140,
                left: 20,
                alignItems: 'center',
                gap: 8
            }}>
                <Image
                    source={{ uri: albumCoverUri }}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 8,
                    }}
                />
                <View style={{
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>
                        {AlbumName}
                    </Text>
                    <Text style={{
                        color: COLORS.lightGray,
                        fontSize: 12,
                    }}>
                        {albumType}
                    </Text>
                </View>
            </View>
            <View style={{
                backgroundColor: 'white',
                borderRadius: 100,
                width: 170,
                height: 25,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 1,
                gap: 8,
                position: 'absolute',
                top: 20,
                left: 20
            }}>
                <Image
                    source={{ uri: albumCoverUri }}
                    style={{
                        width: 24,
                        height: 24,
                        borderRadius: 100,
                    }}
                />
                <Text style={{fontWeight:500}}>Ta na pista Tropa</Text>
            </View>
        </TouchableOpacity>
    )
}