import { StyleSheet, View } from 'react-native';
// import Home from './src/screens/home/Home';
import Wellcome from './src/screens/wellcome/Wellcome.jsx'

export default function App() {
  return (
    <View style={styles.containerApp}>
      {/* <Home /> */}
      <Wellcome />
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#0d1f2d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
