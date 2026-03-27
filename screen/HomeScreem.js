import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Tela Inicial</Text>

      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}