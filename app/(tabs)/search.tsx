import RechargePoint from "@/components/recharge-point";
import { ThemedText } from "@/components/themed-text";
import { BorderRadius, FluiColors, Spacing } from "@/constants/theme";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Keyboard,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const DARK_MAP_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#212121" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#383838" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#000000" }],
  },
];

type Filter = "todos" | "livres" | "dc-rapido";

const MOCK_RESULTS = [
  {
    id: "1",
    name: "Shell Recharge",
    latitude: -23.5871,
    longitude: -46.6555,
    rating: 4.9,
    distance: "3,2 km",
    duration: "4min",
    price: "R$ 18,40",
    vagasDisponiveis: 3,
    vagasTotal: 4,
    amenities: ["CCS (2)", "CA"] as const,
    sponsored: true,
    livre: true,
  },
  {
    id: "2",
    name: "Shell Select",
    latitude: -23.601,
    longitude: -46.68,
    rating: 4.2,
    distance: "12,8 km",
    duration: "14min",
    price: "R$ 19,60",
    vagasDisponiveis: 5,
    vagasTotal: 6,
    amenities: ["CCS (2)", "CA"] as const,
    sponsored: false,
    livre: true,
  },
];

export default function SearchScreen() {
  const [showResults, setShowResults] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState<Filter>("todos");

  function handleSearch() {
    if (searchInput.trim() === "") return;
    Keyboard.dismiss();
    setShowResults(true);
  }

  function handleBack() {
    if (showResults) {
      setShowResults(false);
      setSearchInput("");
      return;
    }
    router.back();
  }

  useFocusEffect(
    useCallback(() => {
      setShowResults(false);
      setSearchInput("");
    }, []),
  );

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
        customMapStyle={DARK_MAP_STYLE}
        initialRegion={{
          latitude: -23.6,
          longitude: -46.65,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        {MOCK_RESULTS.map((point) => (
          <Marker
            key={point.id}
            coordinate={{
              latitude: point.latitude,
              longitude: point.longitude,
            }}
            title={point.name}
            pinColor={
              point.sponsored ? "orange" : point.livre ? "green" : "red"
            }
          />
        ))}
      </MapView>

      {showResults && (
        <View style={styles.resultsPanel}>
          <View style={styles.resultsHeaderRow}>
            <ThemedText style={styles.resultsTitle}>Pontos na rota</ThemedText>
            <Pressable style={styles.filterButton}>
              <Ionicons name="swap-vertical" size={16} color="#fff" />
              <ThemedText style={styles.filterButtonText}>Filtrar</ThemedText>
            </Pressable>
          </View>

          <ThemedText style={styles.resultsCount}>
            {MOCK_RESULTS.length} encontrados
          </ThemedText>

          <View style={styles.chipsRow}>
            {(
              [
                { key: "todos", label: "Todos" },
                { key: "livres", label: "Livres" },
                { key: "dc-rapido", label: "DC rapido" },
              ] as { key: Filter; label: string }[]
            ).map((chip) => (
              <Pressable
                key={chip.key}
                onPress={() => setFilter(chip.key)}
                style={[styles.chip, filter === chip.key && styles.chipActive]}
              >
                <ThemedText
                  style={[
                    styles.chipText,
                    filter === chip.key && styles.chipTextActive,
                  ]}
                >
                  {chip.label}
                </ThemedText>
              </Pressable>
            ))}
          </View>

          <ScrollView style={styles.searchResults}>
            {MOCK_RESULTS.map((point) => (
              <RechargePoint
                key={point.id}
                name={point.name}
                rating={point.rating}
                distance={point.distance}
                duration={point.duration}
                price={point.price}
                vagasDisponiveis={point.vagasDisponiveis}
                vagasTotal={point.vagasTotal}
                amenities={[...point.amenities]}
                sponsored={point.sponsored}
                livre={point.livre}
              />
            ))}
          </ScrollView>
        </View>
      )}

      <View style={styles.overlay}>
        <Pressable style={styles.backButton} onPress={handleBack}>
          <MaterialIcons
            color={FluiColors.primary}
            name="arrow-back"
            size={22}
          />
        </Pressable>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Buscar Pontos..."
            style={styles.searchInput}
            placeholderTextColor={FluiColors.mutedText}
            onSubmitEditing={handleSearch}
            value={searchInput}
            onChangeText={setSearchInput}
            returnKeyType="search"
          />
          <Pressable onPress={handleSearch} style={styles.searchIconButton}>
            <Ionicons name="search" size={20} color={FluiColors.mutedText} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FluiColors.background,
  },
  overlay: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    paddingHorizontal: Spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.sm,
  },
  backButton: {
    alignItems: "center",
    backgroundColor: FluiColors.text,
    borderColor: FluiColors.primary,
    borderRadius: 18,
    borderWidth: 1.5,
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: FluiColors.card,
    borderRadius: BorderRadius.button,
    paddingHorizontal: Spacing.md,
  },
  searchInput: {
    flex: 1,
    color: FluiColors.text,
    fontSize: 16,
    paddingVertical: Spacing.sm + 4,
  },
  searchIconButton: {
    padding: Spacing.xs,
  },
  resultsPanel: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: FluiColors.background,
    paddingTop: 110,
  },
  resultsHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.md,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  filterButtonText: {
    fontSize: 13,
    color: "#fff",
  },
  resultsCount: {
    paddingHorizontal: Spacing.md,
    color: FluiColors.mutedText,
    fontSize: 13,
    marginTop: 2,
  },
  chipsRow: {
    flexDirection: "row",
    gap: Spacing.sm,
    paddingHorizontal: Spacing.md,
    marginTop: Spacing.md,
  },
  chip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs + 2,
    borderRadius: BorderRadius.button,
    backgroundColor: FluiColors.chipInactive,
  },
  chipActive: {
    backgroundColor: FluiColors.primary,
  },
  chipText: {
    fontSize: 13,
    color: FluiColors.mutedText,
  },
  chipTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  searchResults: {
    marginTop: Spacing.md,
    paddingHorizontal: Spacing.md,
  },
});
