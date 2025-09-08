import { COLORS } from "@/constants/color.js";
import { styles } from "@/assets/styles/home.styles.js";
import { View, Text, ActivityIndicator } from "react-native";

export default function PageLoader() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}
