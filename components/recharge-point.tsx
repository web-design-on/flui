import { BorderRadius, FluiColors, Spacing } from "@/constants/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./themed-text";

interface RechargePointProps {
  name: string;
  rating: number;
  duration: string;
  chargerTypes: string[];
  sponsored?: boolean;
  onPress?: () => void;
  closed?: boolean;
}

export default function RechargePoint({
  name,
  rating,
  duration,
  chargerTypes,
  sponsored = false,
  closed = false,
  onPress,
}: RechargePointProps) {
  function handlePress() {
    if (onPress) {
      onPress();
      return;
    }

    router.replace("/ponto-recarga");
  }

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.searchResultItem,
        {
          borderLeftColor: closed ? "#FF5353" : "lightgreen",
        },
      ]}
    >
      <View style={styles.itemTitleContainer}>
        <ThemedText>
          {name} {closed && " (Fechado)"}
        </ThemedText>

        {sponsored && <Text style={styles.sponsoredText}>Patrocinado</Text>}
      </View>
      <View style={styles.resultInfo}>
        <ThemedText>
          <MaterialIcons color={FluiColors.mutedText} name="star" size={14} />{" "}
          {rating}
        </ThemedText>

        <ThemedText> - </ThemedText>

        <ThemedText>
          <MaterialCommunityIcons name="car" size={14} /> {duration}
        </ThemedText>
      </View>
      <ThemedText style={styles.chargerTitle}>
        Tipos de carregador disponíveis:
      </ThemedText>
      <View style={styles.chargerTypes}>
        {chargerTypes.map((type) => (
          <Text key={type} style={styles.chargerType}>
            {type}
          </Text>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchResultItem: {
    backgroundColor: FluiColors.card,
    borderTopRightRadius: BorderRadius.button,
    borderBottomRightRadius: BorderRadius.button,
    padding: Spacing.md,
    marginHorizontal: 16,
    marginTop: 16,
    borderLeftWidth: 4,
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
  resultInfo: {
    flexDirection: "row",
    gap: Spacing.xs,
  },
  chargerTitle: {
    borderTopWidth: 1,
    borderColor: FluiColors.text,
    paddingTop: Spacing.sm,
    marginTop: Spacing.sm,
    fontSize: 14,
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
