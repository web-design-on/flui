import { BorderRadius, FluiColors, Spacing } from "@/constants/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./themed-text";

type Amenity = "CCS (2)" | "CA";

interface RechargePointProps {
  name: string;
  rating: number;
  distance: string;
  duration: string;
  price: string;
  vagasDisponiveis: number;
  vagasTotal: number;
  amenities?: Amenity[];
  sponsored?: boolean;
  livre?: boolean;
  closed?: boolean;
  onPress?: () => void;
}

const AMENITY_META: Record<
  Amenity,
  { icon: keyof typeof MaterialCommunityIcons.glyphMap; label: string }
> = {
  "CCS (2)": { icon: "ev-station", label: "CCS (2)" },
  CA: { icon: "power-plug", label: "CA" },
};

export default function RechargePoint({
  name,
  rating,
  distance,
  duration,
  price,
  vagasDisponiveis,
  vagasTotal,
  amenities = [],
  sponsored = false,
  livre = false,
  closed = false,
  onPress,
}: RechargePointProps) {
  function handlePress() {
    if (onPress) {
      onPress();
      return;
    }
    router.push("/ponto-recarga");
  }

  const borderColor = closed
    ? FluiColors.markerClosed
    : sponsored
      ? FluiColors.markerSponsored
      : FluiColors.markerLivre;

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.card, { borderLeftColor: borderColor }]}
    >
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <ThemedText style={styles.name}>
            {name}
            {closed ? " (Fechado)" : ""}
          </ThemedText>
          <ThemedText style={styles.subInfo}>
            {distance} - {duration}
          </ThemedText>
        </View>

        {sponsored && (
          <View
            style={[styles.badge, { backgroundColor: FluiColors.sponsoredBg }]}
          >
            <Text
              style={[styles.badgeText, { color: FluiColors.sponsoredText }]}
            >
              Patrocinado
            </Text>
          </View>
        )}
        {!sponsored && livre && !closed && (
          <View style={[styles.badge, { backgroundColor: FluiColors.livreBg }]}>
            <Text style={[styles.badgeText, { color: FluiColors.livreText }]}>
              Livre
            </Text>
          </View>
        )}
      </View>

      <View style={styles.statsRow}>
        <MaterialIcons name="star" size={14} color={FluiColors.star} />
        <ThemedText style={styles.statsText}> {rating.toFixed(1)}</ThemedText>
        <ThemedText style={styles.statsText}>
          {"   "}
          {vagasDisponiveis}/{vagasTotal} vagas
        </ThemedText>
      </View>

      {amenities.length > 0 && (
        <View style={styles.amenitiesRow}>
          {amenities.map((a) => (
            <View key={a} style={styles.amenityPill}>
              <Text style={styles.amenityText}>{AMENITY_META[a].label}</Text>
            </View>
          ))}
        </View>
      )}

      <ThemedText style={styles.priceLine}>
        {price} ~ {duration}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: FluiColors.card,
    borderTopRightRadius: BorderRadius.card,
    borderBottomRightRadius: BorderRadius.card,
    padding: Spacing.md - 2,
    marginTop: Spacing.md - 4,
    borderLeftWidth: 4,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: Spacing.sm,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  subInfo: {
    fontSize: 12,
    color: FluiColors.mutedText,
    marginTop: 2,
  },
  badge: {
    borderRadius: 10,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "500",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Spacing.sm,
  },
  statsText: {
    fontSize: 13,
    fontWeight: "500",
  },
  amenitiesRow: {
    flexDirection: "row",
    gap: Spacing.sm,
    marginTop: Spacing.sm,
  },
  amenityPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: FluiColors.chipInactive,
    borderRadius: 12,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  amenityText: {
    fontSize: 11,
    color: FluiColors.mutedText,
  },
  priceLine: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: Spacing.sm,
  },
});
