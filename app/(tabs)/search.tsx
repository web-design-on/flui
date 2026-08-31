import RechargePoint from "@/components/recharge-point";
import { ThemedText } from "@/components/themed-text";
import { BorderRadius, FluiColors, Spacing } from "@/constants/theme";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function SearchScreen() {
  const [showResults, setShowResults] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function handleSearch() {
    if (searchInput.trim() === "") {
      return;
    }

    setShowResults(true);
  }

  function handleCancelSearch() {
    setShowResults(false);
    setSearchInput("");
    Keyboard.dismiss();
  }

  useFocusEffect(
    useCallback(() => {
      setShowResults(false);
      setSearchInput("");
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Pesquise aqui..."
          style={styles.searchInput}
          placeholderTextColor={FluiColors.text}
          onSubmitEditing={handleSearch}
          value={searchInput}
          onChangeText={setSearchInput}
        />

        <Pressable onPress={handleCancelSearch}>
          <ThemedText style={styles.cancelText}>Cancelar</ThemedText>
        </Pressable>
      </View>

      {showResults && (
        <ScrollView style={styles.searchResults}>
          <RechargePoint
            name="Flui(ndo)"
            rating={4.9}
            duration="12min"
            chargerTypes={["CCS (2)", "CA (1)"]}
            sponsored
          />

          <RechargePoint
            name="Volt Express Moema"
            rating={5}
            duration="10min"
            chargerTypes={["CCS (2)", "CA (1), CCS (4)"]}
          />

          <RechargePoint
            name="Estação ABC"
            rating={4.0}
            duration="15min"
            chargerTypes={["CCS (4)"]}
            sponsored={false}
            closed
          />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: Spacing.md,
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Spacing.md,
  },
  searchInput: {
    backgroundColor: FluiColors.inputText,
    borderRadius: BorderRadius.button,
    color: FluiColors.text,
    fontSize: Spacing.md,
    paddingHorizontal: Spacing.md + 1,
    paddingVertical: Spacing.sm + 4,
    flex: 1,
  },
  searchResults: {
    backgroundColor: FluiColors.inputText,
    borderTopLeftRadius: Spacing.md,
    borderTopRightRadius: Spacing.md,
    marginTop: 200,
    width: "100%",
    flex: 1,
    gap: 8,
  },
});
