import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default function Index() {
  // useFonts asynchronously load these in the background
  const [fontsLoaded] = useFonts({
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    black: require("./assets/fonts/Poppins-Black.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
