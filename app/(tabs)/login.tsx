import { Image } from 'expo-image';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { FluiColors, FluiFonts, Spacing } from '@/constants/theme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardView}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Image
            accessibilityLabel="Ilustração de login no Flui"
            contentFit="contain"
            source={require('@/assets/images/ilustra_login.svg')}
            style={styles.illustration}
          />
          <View style={styles.heading}>
            <Text style={styles.title}>Entre no Flui</Text>
            <Text style={styles.subtitle}>Faça o login usando{`\n`}sua conta Flui</Text>
          </View>
          <View style={styles.form}>
            <Input
              autoCapitalize="none"
              keyboardType="email-address"
              label="E-mail"
              onChangeText={setEmail}
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
            <Pressable onPress={() => {}} style={styles.forgotButton}>
              <Text style={styles.forgotText}>Esqueceu a senha?</Text>
            </Pressable>
          </View>
          <View style={styles.actions}>
            <Button label="Entrar" />
            <Pressable onPress={() => router.push('/cadastro')} style={styles.registerButton}>
              <Text style={styles.registerLink}>Novo aqui? Se cadastre</Text>
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
  forgotButton: {
    alignSelf: 'flex-start',
    paddingVertical: 2,
  },
  forgotText: {
    color: FluiColors.mutedText,
    fontFamily: FluiFonts.inter.regular,
    fontSize: 11,
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
  registerButton: {
    alignSelf: 'center',
    paddingVertical: 2,
  },
  registerLink: {
    color: FluiColors.mutedText,
    fontFamily: FluiFonts.inter.regular,
    fontSize: 11,
    textDecorationLine: 'underline',
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