import { ThemedText } from "@/components/themed-text";
import { BorderRadius, FluiColors, Spacing } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
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
        <View style={styles.searchResults}>
          <Pressable
            onPress={() => router.replace("/ponto-recarga")}
            style={styles.searchResultItem}
          >
            <View style={styles.itemTitleContainer}>
              <ThemedText>Flui(ndo)</ThemedText>
              <Text style={styles.sponsoredText}>Patrocinado</Text>
            </View>

            <View style={styles.resultInfo}>
              <ThemedText>
                <MaterialIcons
                  color={FluiColors.mutedText}
                  name="star"
                  size={14}
                />
                4,9
              </ThemedText>

              <ThemedText> - </ThemedText>

              <ThemedText>
                <MaterialCommunityIcons name="car" /> 12min
              </ThemedText>
            </View>

            <ThemedText style={styles.chargerTitle}>
              Tipos de carregador disponíveis:
            </ThemedText>

            <View style={styles.chargerTypes}>
              <Text style={styles.chargerType}>CCS (2)</Text>
              <Text style={styles.chargerType}>CA (1)</Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
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
    paddingVertical: Spacing.sm,
    flex: 1,
  },
  searchResults: {
    backgroundColor: FluiColors.inputText,
    borderTopLeftRadius: Spacing.md,
    borderTopRightRadius: Spacing.md,
    padding: Spacing.md,
    marginTop: 200,
    width: "100%",
    flex: 1,
  },
  searchResultItem: {
    backgroundColor: FluiColors.card,
    borderRadius: BorderRadius.input,
    padding: Spacing.sm,
  },
  itemTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: Spacing.md,
  },
  sponsoredText: {
    fontSize: 10,
    color: FluiColors.text,
    borderWidth: 1,
    borderColor: FluiColors.primary,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.button,
  },
  cancelText: {
    fontSize: 12,
  },
  resultInfo: {
    flexDirection: "row",
    gap: Spacing.xs,
  },
  chargerTitle: {
    borderTopWidth: 1,
    borderColor: FluiColors.text,
    paddingTop: Spacing.sm,
    marginTop: Spacing.sm,
  },
  chargerTypes: {
    flexDirection: "row",
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  chargerType: {
    fontSize: 12,
    color: FluiColors.text,
    borderWidth: 1,
    borderColor: FluiColors.text,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.button,
  },
});
