import { Container } from '@/components/container';
import { Content } from '@/components/content';
import { LibraryHeader } from '@/components/library-header';
import { SquareFile } from '@/components/square-file';
import { SquareFileAdd } from '@/components/square-file-add';
import { CircularFileAdd } from '@/components/circular-file-add';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import { AvatarArtists } from '@/components/avatar-artists';

export default function Library() {
  return (
    <Container>
      <LibraryHeader />
      <Content>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            flex: 1,
          }}
        >

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <TouchableOpacity>
              <FontAwesome6
                name="arrow-right-arrow-left"
                size={16}
                color="white"
              />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
              }}
            >
              Recentes
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Feather name="layout" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          marginTop: 20,
          marginHorizontal: 10,
          gap: 16
        }}>
          <SquareFile title={'miguelbt'} fileType={'Playlist'} artist={'BTelles'} image={'https://images.unsplash.com/photo-1731223833744-7904a1bbeb6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D'}/>
          <SquareFile title={'BT'} fileType={'Playlist'} artist={'BTelles'} image={'https://images.unsplash.com/photo-1727258720973-fefc6360944d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'}/>
          <SquareFile title={'BT boombap'} fileType={'Playlist'} artist={'BTelles'} image={'https://images.unsplash.com/photo-1732394297043-31c5afccc2dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D'}/>
          <SquareFile title={'BTelles'} fileType={'Playlist'} artist={'BTelles'} image={'https://images.unsplash.com/photo-1732624697703-c5b0d3110cb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D'}/>
          <SquareFile title={'As pura'} fileType={'Playlist'} artist={'BTelles'} image={'https://images.unsplash.com/photo-1732262548358-b3b82fa7d4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D'}/>
          <AvatarArtists title={'2ZDinizz'} artist={'Artista'} image={'https://images.unsplash.com/photo-1732572854523-f330af9a72ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'}/>
          <SquareFile title={'Arquivos locais'} fileType={'Playlist'} numberOfMusics={'40 faixas'} image={'https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-folder-icon-png-image_855010.jpg'} />
          <SquareFile title={'Músicas Curtidas'} fileType={'Playlist'} numberOfMusics={'22 músicas'} image={'data:image/jpeg;base64,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'} />
          <CircularFileAdd title={'Adicionar artistas'} />
          <SquareFileAdd title={'Adicionar podcasts'} />
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
