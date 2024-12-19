import { COLORS } from "@/constants/constants";
import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

interface ArtistPerfilMusicsProps {
    indice: string;
    musicName: string;
    musicViews: string;
    image: any;
}

export function ArtistPerfilMusics({ indice, musicName, musicViews, image }: ArtistPerfilMusicsProps) {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            paddingVertical: 12,
            marginRight: 20
        }}>
            <Text style={{
                color: 'white',
                fontSize: 16,
                marginRight: 10,
            }}>
                {indice}
            </Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                }}>
                    <Image
                        source={{ uri: image }}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 4,
                        }}
                    />
                    <View>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                color: 'white',
                            }}>
                                {musicName}
                            </Text>
                            <Text style={{
                                color: COLORS.lightGray,
                                fontSize: 12,
                            }}>
                                {musicViews}
                            </Text>
                        </View>
                    </View>
                </View>
                <Entypo name="dots-three-vertical" size={24} color={COLORS.lightGray} />
            </View>

        </TouchableOpacity>
    )
}