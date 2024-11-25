import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Container } from '@/components/container';
import { HomeHeader } from '@/components/home-header';
import { Content } from '@/components/content';
import { MusicSmall } from '@/components/music-small';
import { MusicMedium } from '@/components/music-medium';
import { ScrollView } from 'react-native';
import { MusicCompact } from '@/components/music-compact';
import { COLORS } from '@/constants/constants';
import { MusicLarge } from '@/components/music-large';

export default function HomeScreen() {
  return (
    <Container>
      <HomeHeader />
      <Content>
        <View style={{ marginVertical: 8, gap: 12 }}>
          <View style={{ flex: 1, gap: 8, flexDirection: 'row' }}>
            <MusicSmall title={'30PRAUM'} image={'https://images.unsplash.com/photo-1731707667003-f202025c29a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D'} />
            <MusicSmall title={'BTelles'} image={'https://plus.unsplash.com/premium_photo-1683115179970-2422d172e36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxidW0lMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D'} />
          </View>
          <View style={{ flex: 1, gap: 8, flexDirection: 'row' }}>
            <MusicSmall title={'Rio de janeiro vibes/rjvibes'} image={'https://plus.unsplash.com/premium_photo-1705351823427-ae0523ca8c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFsYnVtJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D'} />
            <MusicSmall title={'Travis Scott'} image={'https://images.unsplash.com/photo-1522673999312-93aa76caeda6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFsYnVtJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D'} />
          </View>
          <View style={{ flex: 1, gap: 8, flexDirection: 'row' }}>
            <MusicSmall title={'Eminem'} image={'https://plus.unsplash.com/premium_photo-1731287011777-b3fdfb104dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMTR8fHxlbnwwfHx8fHw%3D'} />
            <MusicSmall title={'Filipe Ret'} image={'https://images.unsplash.com/photo-1731243769111-90fec6f9c7f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NTZ8fHxlbnwwfHx8fHw%3D'} />
          </View>
        </View>
        <View style={{ gap: 20, marginTop: 12 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Sugestões de álbuns para você</Text>
          <ScrollView horizontal={true} contentContainerStyle={{ gap: 20, }} showsHorizontalScrollIndicator={false}>
            <MusicMedium title={'Acrônico'} artist={'Jean Tassy, luri Rio Branco'} image={'https://images.unsplash.com/photo-1732147145548-0c245396a268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D'} />
            <MusicMedium title={'GNX'} artist={'Kendrick Lamar'} image={'https://images.unsplash.com/photo-1732439857681-ece7fe1ff7eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'} />
            <MusicMedium title={'Propósito'} artist={'Trak'} image={'https://images.unsplash.com/photo-1732444827571-3b16b9a837e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'} />
          </ScrollView>
        </View>
        <View style={{ gap: 20, marginTop: 12 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Recomendações para hoje</Text>
          <ScrollView horizontal={true} contentContainerStyle={{ gap: 20, }} showsHorizontalScrollIndicator={false}>
            <MusicMedium title={'Tudo de novo'} artist={'Raflow, Tz da Coronel, Cúpula'} image={'https://images.unsplash.com/photo-1732496742791-8e3e7ba5c385?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <MusicMedium title={'Apocalipse'} artist={'Caio Luccas, NADAMAL'} image={'https://images.unsplash.com/photo-1592245755173-c52fe18ad2ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmFwcGVyfGVufDB8fDB8fHww'} />
            <MusicMedium title={'Sua Culpa'} artist={'Gapes, Sotam'} image={'https://images.unsplash.com/photo-1529279007968-c558b75b073b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmFwcGVyfGVufDB8fDB8fHww'} />
          </ScrollView>
        </View>
        <View style={{ marginTop: 12 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Recentes</Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.lightGray, fontWeight: 'bold' }}>Mostrar Tudo</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} contentContainerStyle={{ gap: 20 }} showsHorizontalScrollIndicator={false}>
            <MusicCompact title={'Filipe Ret -Nume'} playlistCreator={'Som Livre'} image={"https://plus.unsplash.com/premium_photo-1730828574410-47e0ca956aea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"} />
            <MusicCompact title={'miguelbt'} playlistCreator={'BTelles'} image={"https://images.unsplash.com/photo-1731848358416-bc131af0f433?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D"} />
            <MusicCompact title={'30PRAUM'} playlistCreator={'30PRAUM'} image={"https://images.unsplash.com/photo-1732203363655-dda8834440ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5OHx8fGVufDB8fHx8fA%3D%3D"} />
            <MusicCompact title={'Boombap'} playlistCreator={'BTelles'} image={"https://images.unsplash.com/photo-1664566484452-03b6f3817fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjN8fHxlbnwwfHx8fHw%3D"} />
            <MusicCompact title={'Coisas de cinema'} playlistCreator={'Lezin'} image={"https://plus.unsplash.com/premium_photo-1728904064102-7068efe855f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzV8fHxlbnwwfHx8fHw%3D"} />
          </ScrollView>
        </View>
        <View style={{ gap: 20, marginTop: 12 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Suas músicas estão com saudade</Text>
          <ScrollView horizontal={true} contentContainerStyle={{ gap: 20, }} showsHorizontalScrollIndicator={false}>
            <MusicMedium title={'Coisas de cinema'} artist={'naris, Lezin, Theuzz011'} image={'https://images.unsplash.com/photo-1732444827571-3b16b9a837e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'} />
            <MusicMedium title={'Boombap Brasil'} artist={'Clássicas do boombap nacional'} image={'https://images.unsplash.com/photo-1732296885178-6ee6aa71c01c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D'} />
            <MusicMedium title={'Garoto Oceano'} artist={'Caio Ocean'} image={'https://images.unsplash.com/photo-1732229654147-3562920a8e3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D'} />
          </ScrollView>
        </View>
        <View style={{ gap: 20, marginTop: 12 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Álbuns com as músicas que você adora</Text>
          <ScrollView horizontal={true} contentContainerStyle={{ gap: 20, }} showsHorizontalScrollIndicator={false}>
            <MusicMedium title={'Mistérios'} artist={'KayBlack'} image={'https://plus.unsplash.com/premium_photo-1730828574006-6cc51c904b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D'} />
            <MusicMedium title={'Coisas que eu já devia ter dito há um tempo'} artist={'Mc Kako'} image={'https://images.unsplash.com/photo-1732219516085-1de5f41d0e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Nnx8fGVufDB8fHx8fA%3D%3D'} />
            <MusicMedium title={'Contradições'} artist={'KayBlack'} image={'https://plus.unsplash.com/premium_photo-1727539364539-c382852a87c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D'} />
          </ScrollView>
        </View>
        <View style={{ gap: 20, marginTop: 12 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Novos lançamentos para você</Text>
          <ScrollView horizontal={true} contentContainerStyle={{ gap: 20, }} showsHorizontalScrollIndicator={false}>
            <MusicMedium title={'A Verdade Machuca'} artist={'Tz da Coronel'} image={'https://images.unsplash.com/photo-1731688687605-e1e7aa7fb42c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzN8fHxlbnwwfHx8fHw%3D'} />
            <MusicMedium title={'Bem vindo ao meu Mundo'} artist={'MC PH'} image={'https://images.unsplash.com/photo-1731332066050-47efac6e884f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDh8fHxlbnwwfHx8fHw%3D'} />
            <MusicMedium title={'Pálido ponto Azul'} artist={'Kant'} image={'https://images.unsplash.com/photo-1731462385471-90cf5aa51848?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDl8fHxlbnwwfHx8fHw%3D'} />
          </ScrollView>
        </View>
        <View style={{ gap: 20, marginTop: 12 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Para acompanhar sua noite</Text>
          <ScrollView horizontal={true} contentContainerStyle={{ gap: 20, }} showsHorizontalScrollIndicator={false}>
            <MusicMedium artist={'Ferrugem, Péricles, Belo,  Kamisa 10, Mumuzinho'} image={'https://plus.unsplash.com/premium_photo-1712956443676-76a1e230c898?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMTB8fHxlbnwwfHx8fHw%3D'} />
            <MusicMedium artist={'Legião Urbana, Engenheiros do Hawaii'} image={'https://plus.unsplash.com/premium_photo-1731287011777-b3fdfb104dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMTR8fHxlbnwwfHx8fHw%3D'} />
            <MusicMedium artist={'MC LUUKY, Natanzinho Lima, NATTAN, Wesley Safadão'} image={'https://images.unsplash.com/photo-1729691692870-a957012d616a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MjJ8fHxlbnwwfHx8fHw%3D'} />
          </ScrollView>
        </View>
        <View style={{ gap: 20, marginTop: 12 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Estações recomendadas</Text>
          <ScrollView horizontal={true} contentContainerStyle={{ gap: 20, }} showsHorizontalScrollIndicator={false}>
            <MusicMedium artist={'Derxan, Caio Ocean, Gyylo, 2ZDinniz'} image={'https://images.unsplash.com/photo-1730304538482-5fa524c79411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NDR8fHxlbnwwfHx8fHw%3D'} />
            <MusicMedium artist={'Pinepple StormTv, Rock Danger, LEALL, Derxan'} image={'https://images.unsplash.com/photo-1731243769111-90fec6f9c7f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NTZ8fHxlbnwwfHx8fHw%3D'} />
            <MusicMedium artist={'Rock Danger, Derxan, TOKIODK, Big Bllakk'} image={'https://images.unsplash.com/photo-1730292423126-077dd3750a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NzR8fHxlbnwwfHx8fHw%3D'} />
          </ScrollView>
        </View>
        <View>
          <MusicLarge image={'https://images.unsplash.com/photo-1730833545520-2e8cc0f52af3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NTF8fHxlbnwwfHx8fHw%3D'}  imageBackground={'https://images.unsplash.com/photo-1730387761544-8b5ec3bfca5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NDd8fHxlbnwwfHx8fHw%3D'}/>
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
