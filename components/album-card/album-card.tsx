import React from "react";
import { TouchableOpacity, View, Image, Text } from 'react-native';

interface AlbumCardProps {
    image: string
    AlbumName: string
}

export function AlbumCard({ image, AlbumName }: AlbumCardProps) {
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 150,
        }}>
            <Image
                source={{ uri: image }}
                style={{
                    width: 140,
                    height: 140,

                }}
            />
            <Text style={{
                color: 'white',
                fontSize: 12,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 5
            }}>
                {AlbumName}
            </Text>
        </TouchableOpacity>
    )
}