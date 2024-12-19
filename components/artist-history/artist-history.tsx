import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from "@/constants/constants";

interface ArtistHistoryProps {
    Image: string;
    artistViews: string;
    artistHistory: string;
}

export function ArtistHistory({ Image, artistViews, artistHistory }: ArtistHistoryProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground
                source={{ uri: Image }}
                style={styles.imageBackground}
                imageStyle={styles.imageStyle}
            >
                <View style={styles.verifiedContainer}>
                    <MaterialIcons name="verified" size={20} color={COLORS.blue} />
                    <Text style={styles.verifiedText}>Artista verificado</Text>
                </View>

                <View style={styles.infoContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>,
                        <Text style={styles.artistViews}>{artistViews}</Text>
                        <Text style={styles.monthlyListeners}>ouvintes mensais</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <Text style={styles.artistHistory} numberOfLines={3}>{artistHistory}</Text>
                        <AntDesign name="right" size={24} color="white" />
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        borderRadius: 10
    },
    imageBackground: {
        width: '100%',
        height: 380,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageStyle: {
        borderRadius: 10,
    },
    verifiedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 12,
        left: 12,
        padding: 4,
        borderRadius: 4,
    },
    verifiedText: {
        color: 'white',
        marginLeft: 6,
        fontSize: 14,
        fontWeight: '500',
    },
    infoContainer: {
        position: 'absolute',
        bottom: 24,
        left: 12,
        paddingHorizontal: 12,
    },
    artistViews: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 26,
    },
    monthlyListeners: {
        color: 'white',
        fontSize: 14,
        marginTop: 2,
        textTransform: 'uppercase',
    },
    artistHistory: {
        color: 'white',
        fontSize: 14,
        marginTop: 12,
        lineHeight: 20,
        maxWidth: '90%',
    },
});
