import React from "react";
import { View, Text } from 'react-native';
import { BackButton } from "../back-button/back-button";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/constants";

interface ArtistPerfilHeaderProps {
    name: string
}

export function ArtistPerfilHeader({ name }: ArtistPerfilHeaderProps) {
    const router = useRouter();

    return (
        <View style={{
            flexDirection: 'row',
            gap: 40,
            backgroundColor: COLORS.backgroundScreen,
            paddingHorizontal: 20,
            paddingVertical: 16,
            marginTop: 22,
            alignItems: 'center'
        }}>
            <BackButton onPress={() => { router.back() }} size={34}/>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 800}}>
                {name}
            </Text>
        </View>
    )
}