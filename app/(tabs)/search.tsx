import { StyleSheet, Text,} from 'react-native';

import { Content } from '@/components/content';
import { Container } from '@/components/container';
import { SearchHeader } from '@/components/search-header';

export default function TabTwoScreen() {
  return (
   <Container>
    <SearchHeader />
    <Content>

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
