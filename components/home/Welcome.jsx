import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "@/constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation(); // this has to be inside the component to work properly.

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, 0)}> Find The Most</Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}> Luxury Item</Text>
      </View>

      <View>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>

          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onPressIn={() => {
                navigation.navigate("Search");
              }}
              placeholder="What are you looking for"
            />
          </View>
          <View>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons
                name="camera-outline"
                size={SIZES.xLarge}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

//01.09.00 hrs
