import { FluiColors } from "@/constants/theme";
import { Text, View } from "react-native";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </View>
  );
}

const styles = {
  container: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  text: {
    color: FluiColors.text,
    fontSize: 24,
    fontWeight: "bold",
  },
};
