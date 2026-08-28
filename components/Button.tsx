import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

import { BorderRadius, FluiColors, FluiFonts, Spacing } from '@/constants/theme';

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        variant === 'outline' ? styles.outlineButton : styles.primaryButton,
        pressed && styles.pressedButton,
        isDisabled && styles.disabledButton,
      ]}>
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? FluiColors.primary : FluiColors.text} />
      ) : (
        <Text style={[styles.label, variant === 'outline' && styles.outlineLabel]}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: BorderRadius.button,
    justifyContent: 'center',
    minHeight: 44,
    paddingHorizontal: Spacing.lg,
    width: '100%',
  },
  disabledButton: {
    opacity: 0.55,
  },
  label: {
    color: FluiColors.text,
    fontFamily: FluiFonts.josefin.bold,
    fontSize: 16,
  },
  outlineButton: {
    borderColor: FluiColors.primary,
    borderWidth: 1,
  },
  outlineLabel: {
    color: FluiColors.primary,
  },
  pressedButton: {
    opacity: 0.82,
  },
  primaryButton: {
    backgroundColor: FluiColors.primary,
  },
});