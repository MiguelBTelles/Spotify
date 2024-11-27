import { Container } from '@/components/container';
import { Content } from '@/components/content';
import { LibraryHeader } from '@/components/library-header';
import { StyleSheet, View, Text} from 'react-native';

export default function Library() {
  return(
    <Container>
      <LibraryHeader />
      <Content>

      </Content>
    </Container>
  )
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
