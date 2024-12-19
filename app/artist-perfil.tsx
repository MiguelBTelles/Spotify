import { AlbumCard } from "@/components/album-card/album-card";
import { AlbumLarge } from "@/components/album-large/album-large";
import { ArtistHistory } from "@/components/artist-history/artist-history";
import { ArtistPefilBanner } from "@/components/artist-perfil-banner/artist-perfil-banner";
import { ArtistPerfilHeader } from "@/components/artist-perfil-header/artist-perfil-header";
import { ArtistPerfilInfo } from "@/components/artist-perfil-info/artist-perfil-info";
import { ArtistPerfilMusics } from "@/components/artist-perfil-musics/artist-perfil-musics";
import { ArtistPerfilTabs } from "@/components/artist-perfil-tabs/artist-perfil-tabs";
import { BackButton } from "@/components/back-button/back-button";
import { SquareFile } from "@/components/square-file";
import { VerticalGenre } from "@/components/vertical-genre";
import { COLORS } from "@/constants/constants";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

export default function ArtistPerfil() {
    const router = useRouter();

    return (
        <>
            <ArtistPerfilHeader name="Filipe Ret" />
            <View style={{
                flex: 1,
                backgroundColor: COLORS.backgroundScreen,
                paddingHorizontal: 20
            }}>
                <ScrollView>
                    <ArtistPefilBanner
                        image='https://images.unsplash.com/photo-1732572854523-f330af9a72ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
                        name='Filipe Ret'
                    />
                    <View style={{
                    }}>
                        <ArtistPerfilInfo
                            monthlyListeners="8,9 mi ouvintes mensais"
                            albumShortUri="https://images.unsplash.com/photo-1732147145548-0c245396a268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D"
                        />
                        <ArtistPerfilTabs />
                        <View>
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginTop: 20,
                                marginBottom: 10
                            }}>
                                Popular
                            </Text>
                            <ArtistPerfilMusics
                                indice="1"
                                musicName="Acima De Mim Só Deus"
                                musicViews="7.539.965"
                                image='https://images.unsplash.com/photo-1732444827571-3b16b9a837e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'
                            />
                            <ArtistPerfilMusics
                                indice="2"
                                musicName="De Onde Eu Venho"
                                musicViews="6.539.965"
                                image='https://plus.unsplash.com/premium_photo-1727539364539-c382852a87c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D'
                            />
                            <ArtistPerfilMusics
                                indice="3"
                                musicName="Melhor Vibe"
                                musicViews="92.007.965"
                                image='https://images.unsplash.com/photo-1731688687605-e1e7aa7fb42c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzN8fHxlbnwwfHx8fHw%3D'
                            />
                            <ArtistPerfilMusics
                                indice="4"
                                musicName="Nós Combina"
                                musicViews="42.539.965"
                                image='https://plus.unsplash.com/premium_photo-1731287011777-b3fdfb104dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMTR8fHxlbnwwfHx8fHw%3D'
                            />
                            <ArtistPerfilMusics
                                indice="5"
                                musicName="Poesia Acústica #9"
                                musicViews="321.539.965"
                                image='https://images.unsplash.com/photo-1730292423126-077dd3750a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NzR8fHxlbnwwfHx8fHw%3D'
                            />
                        </View>
                        <View>
                            <Text style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginBottom: 10,
                                paddingVertical: 10

                            }}>
                                Escolha do artista
                            </Text>
                            <AlbumLarge
                                albumCoverUri='https://images.unsplash.com/photo-1732572854523-f330af9a72ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
                                AlbumName="Filipe Ret - NUME | As Melhorias"
                                albumType="Playlist"
                            />
                        </View>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginBottom: 10,
                                    paddingVertical: 10
                                }}>
                                    Lançamentos populares
                                </Text>
                                <Text style={{
                                    color: COLORS.lightGray,
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    marginBottom: 10,
                                    paddingVertical: 10,
                                    marginLeft: 'auto',
                                }}>
                                    Mostrar tudo
                                </Text>
                            </View>
                            <View style={{
                                gap: 20,
                                marginBottom: 20
                            }}>
                                <SquareFile
                                    title={'NUME'}
                                    fileType={'Álbum'}
                                    artist={'Filipe Ret'}
                                    image={'https://images.unsplash.com/photo-1731223833744-7904a1bbeb6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D'}
                                />
                                <SquareFile
                                    title={'FRXV (Ao Vivo)'}
                                    fileType={'Álbum'}
                                    artist={'Filipe Ret'}
                                    image={'https://images.unsplash.com/photo-1727258720973-fefc6360944d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'}
                                />
                                <SquareFile
                                    title={'Lume'}
                                    fileType={'Álbum'}
                                    artist={'Filipe Ret'}
                                    image={'https://images.unsplash.com/photo-1732394297043-31c5afccc2dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D'}
                                />
                                <SquareFile
                                    title={'Imaterial'}
                                    fileType={'Álbum'}
                                    artist={'Filipe Ret'}
                                    image={'https://images.unsplash.com/photo-1732624697703-c5b0d3110cb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D'}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={{
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray,
                            borderRadius: 20,
                            alignItems: 'center',
                            width: '40%',
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 12,
                                fontWeight: 'bold',
                            }}>
                                Ver discografia
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginTop: 20,
                            marginBottom: 10,
                        }}>

                            Com Filipe Ret
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            gap: 8,
                        }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <AlbumCard
                                    image="https://images.unsplash.com/photo-1731707667003-f202025c29a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
                                    AlbumName="Filipe Ret - NUME | As Melhorias"
                                />
                                <AlbumCard
                                    image="https://plus.unsplash.com/premium_photo-1683115179970-2422d172e36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
                                    AlbumName="Filipe Ret - NUME | As Melhorias"
                                />
                                <AlbumCard
                                    image="https://plus.unsplash.com/premium_photo-1705351823427-ae0523ca8c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFsYnVtJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D"
                                    AlbumName="Filipe Ret - NUME | As Melhorias"
                                />
                                <AlbumCard
                                    image="https://images.unsplash.com/photo-1522673999312-93aa76caeda6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D"
                                    AlbumName="Filipe Ret - NUME | As Melhorias"
                                />
                            </ScrollView>
                        </View>
                    <View style={{ marginTop: 40 }}>
                        <Text style={{ color: 'white', fontWeight: 600, fontSize: 18,}}>Curtas de Filipe Ret</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <VerticalGenre genre={'Cena de Cinema'} imageBackground={'https://images.unsplash.com/photo-1620281408936-b34691bbb34a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXAlMjBmdW5rfGVufDB8fDB8fHww'} />
                                <VerticalGenre genre={'Tua fé'} imageBackground={'https://images.unsplash.com/photo-1596018916659-3bc0a5ed0e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtbHxlbnwwfHwwfHx8MA%3D%3D'} />
                                <VerticalGenre genre={'Quero Paz'} imageBackground={'https://images.unsplash.com/photo-1620444264083-80f27637336a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhcHBlcnxlbnwwfHwwfHx8MA%3D%3D'} />
                                <VerticalGenre genre={'Lume'} imageBackground={'https://images.unsplash.com/photo-1620281408936-b34691bbb34a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXAlMjBmdW5rfGVufDB8fDB8fHww'} />
                                <VerticalGenre genre={'Nume'} imageBackground={'https://images.unsplash.com/photo-1596018916659-3bc0a5ed0e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtbHxlbnwwfHwwfHx8MA%3D%3D'} />
                                <VerticalGenre genre={'Poesia'} imageBackground={'https://images.unsplash.com/photo-1620444264083-80f27637336a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhcHBlcnxlbnwwfHwwfHx8MA%3D%3D'} />
                            </ScrollView>
                        </View>
                    </View>
                </View>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 40,
                    marginBottom: 10
                }}>Sobre</Text>
                <ArtistHistory 
                    Image='https://images.unsplash.com/photo-1732572854523-f330af9a72ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
                    artistViews="8.918.549"
                    artistHistory="Filipe Ret é um rapper e compositor brasileiro. Ele é conhecido por suas letras de rap e por sua habilidade de contar histórias. Ele é um dos rappers mais populares do Brasil e é conhecido por sua habilidade de contar histórias e por suas letras de rap. Filipe Ret é um dos rappers mais populares do Brasil e é conhecido por sua habilidade de contar histórias e por suas letras de rap."    
                />
            </ScrollView>
        </View>
        </>
    );
}