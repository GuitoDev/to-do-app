import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.blocoHeader}>
      <Text>Header</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    blocoHeader: {
    padding: 2,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
