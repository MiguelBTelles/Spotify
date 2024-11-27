import { StyleSheet, Text, View} from 'react-native';

import { Content } from '@/components/content';
import { Container } from '@/components/container';
import { SearchHeader } from '@/components/search-header';
import { MusicLarge } from '@/components/music-large';
import { VerticalGenre } from '@/components/vertical-genre';

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
