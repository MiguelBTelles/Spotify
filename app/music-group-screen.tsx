import { BackButton } from "@/components/back-button/back-button";
import React from "react"
import { View, ScrollView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from "@/constants/constants";
import { InputSearch } from "@/components/input-search/input-search";
import { MusicSmallCompact } from "@/components/music-small-compact/music-small-compact";
import { AlbumInfo } from "@/components/album-info/album-info";
import { AvatarArtists } from "@/components/avatar-artists";
import { MusicMedium } from "@/components/music-medium";


export default function MusicGroupScreen() {
    const router = useRouter();

    return (
        <View style={{ backgroundColor: COLORS.backgroundScreen, flex: 1, padding: 20, }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 28 }}>
                    <BackButton onPress={() => {
                        router.back()
                    }} />
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <InputSearch />
                    </View>
                </View>
                <AlbumInfo
                    albumCoverUri="https://images.unsplash.com/photo-1732147145548-0c245396a268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D"
                    albumTitle="É Que Eu Nasci Teimoso"
                    artists={["tchelo rodrigues", "retroboy"]}
                    artistImages={[
                        "https://images.unsplash.com/photo-1732147145548-0c245396a268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D",
                        "https://images.unsplash.com/photo-1732444827571-3b16b9a837e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
                    ]}
                    musicGroupType="Álbum"
                    albumYear="2024"
                    albumShortUri="https://images.unsplash.com/photo-1732147145548-0c245396a268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D"
                />
                <View style={{ marginTop: 20, gap: 16 }}>
                    <MusicSmallCompact
                        title="Só Mais Um Dia"
                        artist="tchelo rodrigues, L7NNON, retroboy"
                    />
                    <MusicSmallCompact
                        title="Pura Nata"
                        artist="tchelo rodrigues, L7NNON, retroboy"
                    />
                    <MusicSmallCompact
                        title="Kit Exclusivo"
                        artist="tchelo rodrigues, L7NNON, retroboy"
                    />
                    <MusicSmallCompact
                        title="Lado Bom e Mau"
                        artist="tchelo rodrigues, L7NNON, retroboy"
                    />
                    <MusicSmallCompact
                        title="Espelho"
                        artist="tchelo rodrigues, L7NNON, retroboy"
                    />
                </View>
                <View style={{ marginTop: 20, gap: 20 }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 20 }}>outubro 4, 2024</Text>
                        <Text style={{ color: 'white', fontSize: 20 }}>15 músicas • 45min33s</Text>
                    </View>
                    <View style={{ gap: 20 }}>
                        <AvatarArtists title="tchelo rodrigues" image='https://images.unsplash.com/photo-1732147145548-0c245396a268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D' />
                        <AvatarArtists title="retroboy" image='https://images.unsplash.com/photo-1732444827571-3b16b9a837e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8' />
                    </View>
                </View>
                <View style={{ gap: 20, marginTop: 34, marginBottom: 20 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Você também pode gostar</Text>
                    <ScrollView horizontal={true} contentContainerStyle={{ gap: 20, }} showsHorizontalScrollIndicator={false}>
                        <MusicMedium title={'Acrônico'} artist={'Jean Tassy, luri Rio Branco'} onPress={
                            () => { router.push('/music-group-screen') }
                        } image={'https://images.unsplash.com/photo-1732147145548-0c245396a268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D'} />
                        <MusicMedium title={'GNX'} artist={'Kendrick Lamar'} image={'https://images.unsplash.com/photo-1732439857681-ece7fe1ff7eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'} />
                        <MusicMedium title={'Propósito'} artist={'Trak'} image={'https://images.unsplash.com/photo-1732444827571-3b16b9a837e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'} />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}