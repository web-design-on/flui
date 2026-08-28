import { useState } from 'react';
import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native';

import { BorderRadius, FluiColors, FluiFonts, Spacing } from '@/constants/theme';

type InputProps = TextInputProps & {
  label: string;
  error?: string;
};

export function Input({ label, error, onBlur, onFocus, style, ...inputProps }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...inputProps}
        onBlur={(event) => {
          setFocused(false);
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setFocused(true);
          onFocus?.(event);
        }}
        placeholderTextColor={FluiColors.mutedText}
        style={[styles.input, focused && styles.focusedInput, error && styles.errorInput, style]}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: '#ff9f9f',
    fontFamily: FluiFonts.inter.regular,
    fontSize: 10,
    marginTop: Spacing.xs,
  },
  errorInput: {
    borderColor: '#ff6969',
  },
  field: {
    gap: Spacing.xs,
    width: '100%',
  },
  focusedInput: {
    borderColor: FluiColors.primary,
  },
  input: {
    backgroundColor: FluiColors.inputBackground,
    borderColor: FluiColors.border,
    borderRadius: BorderRadius.input,
    borderWidth: 1,
    color: FluiColors.inputText,
    fontFamily: FluiFonts.inter.regular,
    fontSize: 15,
    height: 38,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 0,
  },
  label: {
    color: FluiColors.mutedText,
    fontFamily: FluiFonts.inter.regular,
    fontSize: 13,
  },
});