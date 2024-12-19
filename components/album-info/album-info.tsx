import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/constants";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

interface AlbumInfoProps {
    albumCoverUri: string;
    albumTitle: string;
    artists: string[];
    artistImages: string[];
    albumYear: string;
    musicGroupType: string;
    albumShortUri: string;
}

export function AlbumInfo({
    albumCoverUri,
    albumTitle,
    artists = [],
    artistImages = [],
    albumYear,
    musicGroupType,
    albumShortUri
}: AlbumInfoProps) {
    return (
        <View style={{ marginTop: 50 }}>
            <View style={{ alignItems: "center" }}>
                <Image
                    style={styles.albumImage}
                    source={{ uri: albumCoverUri }}
                />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.albumTitle}>{albumTitle}</Text>
                <View style={styles.artistsContainer}>
                    {artistImages.map((uri, index) => (
                        <Image
                            key={index}
                            style={[
                                styles.artistImage,
                                { marginLeft: index > 0 ? -12 : 0 },
                            ]}
                            source={{ uri }}
                        />
                    ))}
                    <Text numberOfLines={1} style={styles.artistsText}>
                        {artists.join(", ")}
                    </Text>
                </View>
                <Text style={styles.albumYear}>{musicGroupType} • {albumYear}</Text>
            </View>
            <View style={styles.btnsContainer}>
                <View style={styles.leftBtns}>
                    <View style={styles.albumShortContainer}>
                        <Image
                            style={styles.albumShort}
                            source={{ uri: albumShortUri }}
                        />
                    </View>
                    <MaterialIcons name="verified" size={28} color={COLORS.green} />
                    <MaterialCommunityIcons name="download-circle-outline" size={28} color={COLORS.lightGray} />
                    <SimpleLineIcons name="options-vertical" size={20} color={COLORS.lightGray} />
                </View>
                <View style={styles.rightBtns}>
                    <FontAwesome name="random" size={24} color={COLORS.green}/>
                    <AntDesign name="play" size={42} color={COLORS.green}/>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    albumImage: {
        width: 280,
        height: 280,
        borderRadius: 4,
    },
    infoContainer: {
        marginTop: 20,
        gap: 8,
    },
    albumTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: "white",
    },
    artistsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },
    artistImage: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: COLORS.backgroundScreen,
    },
    artistsText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
        marginLeft: 14,
    },
    albumYear: {
        color: COLORS.lightGray,
    },
    albumShortContainer: {
        borderWidth: 1.2,
        borderColor: COLORS.lightGray,
        width: 32,
        height: 42,
        borderRadius: 8
    },
    albumShort: {
        width: 30,
        height: 40,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: COLORS.backgroundScreen,
    },
    btnsContainer: {
        marginTop: 8,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    leftBtns: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    rightBtns: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    }
});

