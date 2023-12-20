import { StyleSheet, View } from 'react-native';
import Header from './src/components/header/Header';

export default function App() {
  return (
    <View style={styles.containerApp}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
