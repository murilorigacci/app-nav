import { View, Text, Button } from 'react-native';
export default function ProfileScreen({ navigation }) {
return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text style={{ fontSize: 24, marginBottom: 20}}>Tela de Perfil</Text>
<Button
title="Voltar para Home"
onPress={() => navigation.navigate('Home')}
/>
</View>
);
}