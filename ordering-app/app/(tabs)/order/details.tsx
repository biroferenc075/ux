import EditScreenInfo from "@/components/EditScreenInfo";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";
import { Text, View } from "@/components/Themed";
import { useAppContext } from "@/store/AppContext";

export default function DetailsScreen() {
  const { state } = useAppContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button onPress={() => router.navigate("/qr_code_scan")}>
        Scan QR code!
      </Button>
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
