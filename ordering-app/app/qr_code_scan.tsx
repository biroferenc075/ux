import { StyleSheet, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text } from "@ui-kitten/components";
import { router } from 'expo-router';
import { Button } from "@ui-kitten/components";


export default function QrCodeScanScreen() {
  const onSuccess = (e : any) => {
      router.navigate("/history/order-details")
  };

  setTimeout(onSuccess, 1000);
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code Scan</Text>
      <View
        style={styles.separator}
      />
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
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});
