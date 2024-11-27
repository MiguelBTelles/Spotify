import { StyleSheet, Text, View} from 'react-native';

import { Content } from '@/components/content';
import { Container } from '@/components/container';
import { SearchHeader } from '@/components/search-header';
import { MusicLarge } from '@/components/music-large';
import { VerticalGenre } from '@/components/vertical-genre';
import { HorizontalGenre } from '@/components/horizontal-genre';

export default function TabTwoScreen() {
  return (
   <Container>
    <SearchHeader />
    <Content>
      <View style={{marginTop: 40}}>
        <Text style={{color: 'white',fontWeight: 600, fontSize: 18, marginLeft: 10}}>Explore seus gêneros</Text>
        <View style={{flexDirection: 'row'}}>
          <VerticalGenre genre={'#trap funk'} imageBackground={'https://images.unsplash.com/photo-1620281408936-b34691bbb34a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXAlMjBmdW5rfGVufDB8fDB8fHww'}/>
          <VerticalGenre genre={'#calm'} imageBackground={'https://images.unsplash.com/photo-1596018916659-3bc0a5ed0e93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtbHxlbnwwfHwwfHx8MA%3D%3D'}/>
          <VerticalGenre genre={'#trap'} imageBackground={'https://images.unsplash.com/photo-1620444264083-80f27637336a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhcHBlcnxlbnwwfHwwfHx8MA%3D%3D'}/>
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={{color: 'white',fontWeight: 600, fontSize: 18, marginLeft: 10}}>Navegar por todas  as seções</Text>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <HorizontalGenre genre={'Músicas'} background={'#f00694'}/>
          <HorizontalGenre genre={'Podcasts'} background={'#6ace37'}/>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <HorizontalGenre genre={'Eventos ao vivo'} background={'#e36dd8'}/>
          <HorizontalGenre genre={'Feito para você'} background={'#2c55b4'}/>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <HorizontalGenre genre={'Lançamentos'} background={'#f53232'}/>
          <HorizontalGenre genre={'Brasil'} background={'#2c55b4'}/>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <HorizontalGenre genre={'Sertanejo'} background={'#f78315'}/>
          <HorizontalGenre genre={'Funk'} background={'#3598fa'}/>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <HorizontalGenre genre={'Samba e pagode'} background={'#6ace37'}/>
          <HorizontalGenre genre={'Paradas de podcast'} background={'#2c55b4'}/>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <HorizontalGenre genre={'Lançamentos de Podcasts'} background={'#f53232'}/>
          <HorizontalGenre genre={'Creators'} background={'#f78315'}/>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <HorizontalGenre genre={'Originais do Spotify'} background={'#2c55b4'}/>
          <HorizontalGenre genre={'Paradas'} background={'#e36dd8'}/>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <HorizontalGenre genre={'Descobrir'} background={'#f00694'}/>
          <HorizontalGenre genre={'Rádio'} background={'#c41e3f'}/>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <HorizontalGenre genre={'Pop'} background={'#6ecfd2'}/>
          <HorizontalGenre genre={'Hip hop'} background={'#aaafaf'}/>
        </View>
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
