import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Container } from '@/components/container';
import { Header } from '@/components/header';
import { HomeHeader } from '@/components/home-header';
import { Content } from '@/components/content';
import { COLORS } from '@/constants/constants';
import { MusicSmall } from '@/components/music-small';

export default function HomeScreen() {
  return (
    <Container>
      <HomeHeader  />
      <Content> 
        <View style={{marginVertical: 8, gap: 12}}>
          <View style={{flex: 1,  gap: 8, flexDirection: 'row'}}>
           <MusicSmall title={'NewLife'} image={'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D'}/>
           <MusicSmall title={'NewLife'} image={'https://plus.unsplash.com/premium_photo-1683115179970-2422d172e36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D'}/>
          </View>
          <View style={{flex: 1,  gap: 8, flexDirection: 'row'}}>
           <MusicSmall title={'Rio de janeiro vibes/rjvibes'} image={'https://plus.unsplash.com/premium_photo-1705351823427-ae0523ca8c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFsYnVtJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D'}/>
           <MusicSmall title={'NewLife'} image={'https://images.unsplash.com/photo-1522673999312-93aa76caeda6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D'}/>
          </View>
          <View style={{flex: 1,  gap: 8, flexDirection: 'row'}}>
          <MusicSmall title={'NewLife'} image={'https://images.unsplash.com/photo-1619983081563-430f63602796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D'}/>
           <MusicSmall title={'NewLife'} image={'https://plus.unsplash.com/premium_photo-1683115179970-2422d172e36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D'}/>
          </View>
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
