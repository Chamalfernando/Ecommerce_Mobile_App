import { Text, View, StyleSheet, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeWindStyleSheet, styled } from "nativewind";
import BottomTabNavigation from "../navigation/BottomTabNavigation";
import { Cart } from "@/screens";
const Stack = createNativeStackNavigator();

export default function Index() {
  // useFonts asynchronously load these in the background
  const [fontsLoaded] = useFonts({
    regular: require("./../assets/fonts/Poppins-Regular.ttf"),
    light: require("./../assets/fonts/Poppins-Light.ttf"),
    bold: require("./../assets/fonts/Poppins-Bold.ttf"),
    medium: require("./../assets/fonts/Poppins-Medium.ttf"),
    extraBold: require("./../assets/fonts/Poppins-ExtraBold.ttf"),
    semiBold: require("./../assets/fonts/Poppins-SemiBold.ttf"),
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
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom-Navigation"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "regular",
    fontSize: 20,
  },
});
