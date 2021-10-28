import React, {useState} from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Icon, Message } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";
import Slider from '@react-native-community/slider';
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../assets/styles";

const Filters = () => {
  const initialRange = 500
  const [range, setRange] = useState(initialRange)

  return (
    <View style={styles.containerMessages}>
      <View style={styles.top}>
        <Text>Distance Filter: {range} m</Text>
        <Text>100</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={100}
          maximumValue={1000}
          step={50}
          value={initialRange}
          onValueChange={(e) => setRange(e)}
          minimumTrackTintColor={PRIMARY_COLOR}
          maximumTrackTintColor="#363636"
        />
        <Text>1000</Text>
      </View>
    </View>
)};

export default Filters;
