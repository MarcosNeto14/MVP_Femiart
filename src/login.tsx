import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Definindo os parâmetros da pilha de navegação
type RootStackParamList = {
  Welcome: undefined
}

// Definindo o tipo da navegação
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>

export default function Login() {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handleLogin() {
    try {
      setLoading(true)

      // Verificar se o usuário existe na tabela profiles
      const { data: userProfile, error } = await supabase
        .from('profiles')
        .select('email, senha')
        .eq('email', email)
        .single()

      if (error) {
        throw error
      }

      if (!userProfile) {
        // Se o usuário não existe, exibir uma notificação
        Alert.alert('Usuário não encontrado', 'Verifique seu email e senha.')
      } else {
        // Verificar se a senha está correta
        if (userProfile.senha !== senha) {
          throw new Error('Senha incorreta.')
        }

        // Redirecionar para a página de boas-vindas
        navigation.navigate('Welcome')
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Erro', error.message)
      } else {
        Alert.alert('Erro', 'Ocorreu um erro desconhecido.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.formGroup}>
        <Input
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
        />
      </View>

      <View style={[styles.formGroup, styles.mt20]}>
        <Button
          title={loading ? 'Aguarde ...' : 'Entrar'}
          onPress={handleLogin}
          disabled={loading}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  mt20: {
    marginTop: 20,
  },
})
