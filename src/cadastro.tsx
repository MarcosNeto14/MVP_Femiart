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

export default function Signup() {
  const navigation = useNavigation<ProfileScreenNavigationProp>()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  async function handleSignup() {
    try {
      setLoading(true)

      // Verificar se as senhas coincidem
      if (senha !== confirmarSenha) {
        throw new Error('As senhas não coincidem.')
      }

      // Verificar se o usuário já está cadastrado com base no email
      const { data: existingProfile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', email)
        .single()

      if (error instanceof Error) {
        throw error
      }

      if (existingProfile) {
        // Se o perfil já existe, exibir uma notificação
        Alert.alert('Usuário já cadastrado', 'Você já possui um cadastro.')
      } else {
        // Se o perfil não existe, fazer o cadastro e redirecionar para a página de boas-vindas
        const { error: signupError } = await supabase.from('profiles').insert({
          email,
          nome,
          telefone,
        })

        if (signupError instanceof Error) {
          throw signupError
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

      <View style={styles.formGroup}>
        <Input
          label="Confirmar Senha"
          value={confirmarSenha}
          onChangeText={(text) => setConfirmarSenha(text)}
          secureTextEntry
        />
      </View>

      <View style={styles.formGroup}>
        <Input
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Input
          label="Telefone"
          value={telefone}
          onChangeText={(text) => {
            // Formatando o telefone para o padrão (xx) xxxxx-xxxx
            const formattedPhoneNumber = text
              .replace(/\D/g, '')
              .replace(/^(\d{2})(\d)/g, '($1) $2')
              .replace(/(\d{5})(\d)/, '$1-$2')
            setTelefone(formattedPhoneNumber)
          }}
          keyboardType="phone-pad"
        />
      </View>

      <View style={[styles.formGroup, styles.mt20]}>
        <Button
          title={loading ? 'Aguarde ...' : 'Cadastrar'}
          onPress={handleSignup}
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
