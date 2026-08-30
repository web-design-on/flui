import { ThemedText } from "@/components/themed-text";
import { FluiColors } from "@/constants/theme";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Keyboard, Pressable, Text, TextInput, View } from "react-native";

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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <TextInput
          placeholder="Pesquise aqui..."
          style={styles.searchInput}
          placeholderTextColor="#FFFFFF"
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
          <View style={styles.searchResultItem} id="searchResults">
            <Pressable
              style={styles.itemTitleContainer}
              onPress={() => router.replace("/ponto-recarga")}
            >
              <ThemedText>Flui(ndo)</ThemedText>
              <Text style={styles.sponsoredText}>Patrocinado</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = {
  container: {
    marginTop: 32,
    paddingHorizontal: 16,
    flex: 1,
  },
  searchInput: {
    backgroundColor: "#505050",
    borderRadius: 32,
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 17,
    paddingVertical: 8,
    flex: 1,
  },
  searchResults: {
    backgroundColor: "#505050",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    marginTop: 200,
    width: "100%",
    flex: 1,
  },
  searchResultItem: {
    backgroundColor: "#333130",
    borderRadius: 8,
    padding: 8,
  },
  itemTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  sponsoredText: {
    fontSize: 10,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: FluiColors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 32,
  },
  cancelText: {
    fontSize: 12,
  },
};
