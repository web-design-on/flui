import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { FluiColors, FluiFonts, Spacing } from '@/constants/theme';

export default function CadastroScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function handleRegister() {
    if (!email || !isEmailValid) {
      setEmailError('Digite um e-mail válido.');
      return;
    }

    if (!password || !vehicle) {
      setFormError('Preencha todos os campos.');
      return;
    }

    setEmailError('');
    setFormError('');
    router.push('/boas-vindas');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Image
            accessibilityLabel="Ilustração do cadastro no Flui"
            contentFit="contain"
            source={require('@/assets/images/ilustra_cadastro.svg')}
            style={styles.illustration}
          />
          <View style={styles.heading}>
            <Text style={styles.title}>Se cadastre no Flui</Text>
            <Text style={styles.subtitle}>Crie uma conta Flui{`\n`}e entre para o grupo!</Text>
          </View>
          <View style={styles.form}>
            <Input
              autoCapitalize="none"
              keyboardType="email-address"
              label="E-mail"
              onChangeText={setEmail}
              error={emailError || (email && !isEmailValid ? 'Digite um e-mail válido.' : undefined)}
              placeholder="Placeholder"
              value={email}
            />
            <Input
              label="Senha"
              onChangeText={setPassword}
              placeholder="Placeholder"
              secureTextEntry
              value={password}
            />
            <Input
              label="Nome do seu EV e Modelo"
              onChangeText={setVehicle}
              placeholder="Placeholder"
              value={vehicle}
            />
          </View>
          <View style={styles.actions}>
            <Button
              disabled={!isEmailValid || !password || !vehicle}
              label="Se cadastrar"
              onPress={handleRegister}
            />
            {formError ? <Text style={styles.formError}>{formError}</Text> : null}
            <Pressable onPress={() => router.push('/login')} style={styles.loginButton}>
              <Text style={styles.loginLink}>Já tem uma conta? Entre aqui</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actions: {
    gap: Spacing.sm,
    marginTop: Spacing.lg,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: Spacing.md,
    paddingHorizontal: 24,
  },
  form: {
    alignSelf: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.md,
    maxWidth: 340,
    width: '100%',
  },
  formError: {
    color: '#ff9f9f',
    fontFamily: FluiFonts.inter.regular,
    fontSize: 12,
    textAlign: 'center',
  },
  heading: {
    alignItems: 'center',
    gap: 5,
  },
  illustration: {
    alignSelf: 'center',
    height: 180,
    marginBottom: 10,
    width: '100%',
  },
  keyboardView: {
    flex: 1,
  },
  loginLink: {
    color: FluiColors.mutedText,
    fontFamily: FluiFonts.inter.regular,
    fontSize: 11,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  loginButton: {
    alignSelf: 'center',
    paddingVertical: 2,
  },
  safeArea: {
    backgroundColor: FluiColors.background,
    flex: 1,
  },
  subtitle: {
    color: FluiColors.text,
    fontFamily: FluiFonts.josefin.regular,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
  title: {
    color: FluiColors.text,
    fontFamily: FluiFonts.josefin.bold,
    fontSize: 20,
  },
});