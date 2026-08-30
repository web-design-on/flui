import { FluiColors } from "@/constants/theme";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
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
