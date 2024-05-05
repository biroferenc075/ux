import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { router } from 'expo-router';
import { Button } from "@ui-kitten/components";
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera";


export default function QrCodeScanScreen() {
    const codeScanner = useCodeScanner({
      codeTypes: ['qr'],
      onCodeScanned: (codes) => {
        console.log(`Scanned ${codes.length} codes!`)
        router.navigate("/")
      }
    })

    const help = async () => {
      res = requestPermission()
      return await res
    }
    const device = useCameraDevice('back')
    const { hasPermission, requestPermission } = useCameraPermission()
    let res;
    if (!hasPermission) {
      res = help()
      if (!res) return (
        <View style={styles.container}>
          <Text style={styles.title}>No permissions? :c</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
        </View>);
    }
    
    if (device == null) return (
    <View style={styles.container}>
      <Text style={styles.title}>No camera? :c</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code Scan</Text>
      <Camera 
        style={StyleSheet.absoluteFill}
        device={device}
        codeScanner={codeScanner}
        isActive={true}
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
