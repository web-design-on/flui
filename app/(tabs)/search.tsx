import { ThemedText } from "@/components/themed-text";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { TextInput, View } from "react-native";

export default function SearchScreen() {
  const [showResults, setShowResults] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function handleSearch() {
    if (searchInput.trim() === "") {
      return;
    }

    setShowResults(true);
  }

  useFocusEffect(
    useCallback(() => {
      setShowResults(false);
    }, []),
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquise aqui..."
        style={styles.searchInput}
        placeholderTextColor="#FFFFFF"
        onSubmitEditing={handleSearch}
        value={searchInput}
        onChangeText={setSearchInput}
      />

      {showResults && (
        <View style={styles.searchResults}>
          <View style={styles.searchResultItem} id="searchResults">
            <ThemedText>Flui(ndo)</ThemedText>
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
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  searchResults: {
    //marginHorizontal: 16,
    backgroundColor: "#505050",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    marginTop: 200,
    //position: "absolute",
    //bottom: 0,
    width: "100%",
    flex: 1,
  },
  searchResultItem: {
    backgroundColor: "#333130",
    borderRadius: 8,
    padding: 8,
  },
};
