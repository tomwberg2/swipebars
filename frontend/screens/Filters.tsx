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

  const [reviewFilter, setReviewFilter] = useState(3)

  return (
    <View style={styles.filterPage}>
      <Text style={{alignItems:"center"}}>Distance Filter: {range} m </Text>
      <View style={styles.top2}>
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
      <Text style={{alignItems:"center"}}>Review Filter: {reviewFilter} stars </Text>
      <View style={styles.top2}>
        <Text>1</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={3}
          onValueChange={(e) => setReviewFilter(e)}
          minimumTrackTintColor={PRIMARY_COLOR}
          maximumTrackTintColor="#363636"
        />
        <Text>5</Text>
      </View>
    </View>
)};

export default Filters;
