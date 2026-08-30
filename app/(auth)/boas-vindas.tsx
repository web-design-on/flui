import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components/Button";
import { FluiColors, FluiFonts, Spacing } from "@/constants/theme";

export default function BoasVindasScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <Image
          accessibilityLabel="Logo do Flui"
          contentFit="contain"
          source={require("@/assets/images/logo_flui.svg")}
          style={styles.logo}
        />
        <Text style={styles.title}>Tenha sempre energia!</Text>
        <Button
          label="Começar"
          onPress={() => router.replace("/(tabs)/home")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    height: 100,
    marginBottom: Spacing.md,
    width: 210,
  },
  safeArea: {
    backgroundColor: FluiColors.background,
    flex: 1,
  },
  title: {
    color: FluiColors.text,
    fontFamily: FluiFonts.josefin.regular,
    fontSize: 18,
    marginBottom: Spacing.lg,
  },
});
