import React from "react";
import { Text, TouchableOpacity,Linking, Platform } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";

const City = () => {
  const lat = 59.34413
  const lng = 18.05715
  const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
  const latLng = `${lat},${lng}`;
  const label = 'Custom Label';
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`
  });

  return (
    <TouchableOpacity style={styles.city} onPress={() => Linking.openURL("https://www.google.se/maps/@59.3378186,18.0728255,15z")}>
      <Text style={styles.cityText}>
        <Icon name="location-sharp" size={13} color={DARK_GRAY} /> Stockholm
      </Text>
    </TouchableOpacity>
  )
};

export default City;
