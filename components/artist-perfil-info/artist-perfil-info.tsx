import { COLORS } from "@/constants/constants";
import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ArtistPerfilInfoProps {
    monthlyListeners: string;
    albumShortUri: any;
}

export function ArtistPerfilInfo({ monthlyListeners, albumShortUri }: ArtistPerfilInfoProps) {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowToggle = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <View style={{
            paddingVertical: 12,
            gap: 8,
            alignItems: "flex-start",
        }}>
            <Text style={{
                color: COLORS.lightGray,
                fontSize: 12,
            }}>
                {monthlyListeners}
            </Text>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                gap: 20,
            }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                }}>
                    <View style={{
                        borderWidth: 1.2,
                        borderColor: COLORS.lightGray,
                        width: 32,
                        height: 42,
                        borderRadius: 8,
                        marginRight: 8,
                    }}>
                        <Image
                            style={{
                                width: 30,
                                height: 40,
                                borderRadius: 8,
                                borderWidth: 3,
                                borderColor: COLORS.backgroundScreen,
                            }}
                            source={{ uri: albumShortUri }}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={handleFollowToggle}
                        style={{
                            paddingVertical: 4,
                            paddingHorizontal: 8,
                            borderWidth: 1,
                            borderColor: isFollowing ? "white" : COLORS.lightGray,
                            borderRadius: 4,
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 60,
                            height: 30
                        }}
                    >
                        <Text style={{
                            color: isFollowing ? "white" : COLORS.lightGray,
                            fontSize: 12,
                            fontWeight: "bold",
                        }}>
                            {isFollowing ? "seguindo" : "seguir"}
                        </Text>
                    </TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color={COLORS.lightGray} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 20,
                    alignItems: 'center'
                }}> 
                    <FontAwesome name="random" size={24} color={COLORS.lightGray} />
                    <AntDesign name="play" size={42} color={COLORS.green} />
                </View>
            </View>
        </View>
    );
}