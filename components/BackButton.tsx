import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FluiColors, Spacing } from "@/constants/theme";

type BackButtonProps = {
  onPress?: () => void;
};

export function BackButton({ onPress }: BackButtonProps) {
  const insets = useSafeAreaInsets();

  return (
    <Pressable
      accessibilityLabel="Voltar"
      accessibilityRole="button"
      onPress={onPress ?? (() => router.back())}
      style={[styles.button, { top: insets.top + Spacing.sm }]}
    >
      <MaterialIcons color={FluiColors.primary} name="arrow-back" size={22} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: FluiColors.text,
    borderColor: FluiColors.primary,
    borderRadius: 18,
    borderWidth: 1.5,
    height: 36,
    justifyContent: "center",
    left: Spacing.md,
    position: "absolute",
    width: 36,
  },
});
