import { StyleSheet, View, Text } from 'react-native';
import { Container } from '@/components/container';
import { HomeHeader } from '@/components/home-header';
import { Content } from '@/components/content';
import { MusicSmall } from '@/components/music-small';
import { MusicMedium } from '@/components/music-medium';
import { ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <Container>
      <HomeHeader />
      <Content>
        <View style={{ marginVertical: 8, gap: 12 }}>
          <View style={{ flex: 1, gap: 8, flexDirection: 'row' }}>
            <MusicSmall title={'NewLife'} image={'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D'} />
            <MusicSmall title={'NewLife'} image={'https://plus.unsplash.com/premium_photo-1683115179970-2422d172e36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D'} />
          </View>
          <View style={{ flex: 1, gap: 8, flexDirection: 'row' }}>
            <MusicSmall title={'Rio de janeiro vibes/rjvibes'} image={'https://plus.unsplash.com/premium_photo-1705351823427-ae0523ca8c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFsYnVtJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D'} />
            <MusicSmall title={'NewLife'} image={'https://images.unsplash.com/photo-1522673999312-93aa76caeda6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D'} />
          </View>
          <View style={{ flex: 1, gap: 8, flexDirection: 'row' }}>
            <MusicSmall title={'NewLife'} image={'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D'} />
            <MusicSmall title={'NewLife'} image={'https://plus.unsplash.com/premium_photo-1683115179970-2422d172e36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D'} />
          </View>
        </View>
        <View style={{ gap: 20, marginTop: 20 }}>
          <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>Recomendações para hoje</Text>
          <ScrollView horizontal={true} contentContainerStyle={{gap: 20}}>
            <MusicMedium title={'Tudo de novo'} artist={'Raflow, Tz da Coronel, Cúpula'} image={'https://images.unsplash.com/photo-1732496742791-8e3e7ba5c385?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <MusicMedium title={'Apocalipse'} artist={'Caio Luccas, NADAMAL'} image={'https://images.unsplash.com/photo-1592245755173-c52fe18ad2ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmFwcGVyfGVufDB8fDB8fHww'} />
            <MusicMedium title={'Sua Culpa'} artist={'Gapes, Sotam'} image={'https://images.unsplash.com/photo-1529279007968-c558b75b073b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmFwcGVyfGVufDB8fDB8fHww'} />
          </ScrollView>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
