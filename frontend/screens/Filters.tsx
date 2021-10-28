import React, {useState} from "react";
import {
  Text,
  View,
  Button
} from "react-native";
import styles from "../assets/styles";
import Slider from '@react-native-community/slider';
import { PRIMARY_COLOR } from "../assets/styles";

const Filters = ({navigation}:any) => {
  const initialRange = 500
  const [range, setRange] = useState(initialRange)

  const [reviewFilter, setReviewFilter] = useState(3)

  return (
    <View style={styles.filterPage}>
      <Text style={{alignItems:"center"}}>Distance Filter: {range} m </Text>
      <View style={styles.top2}>
        <Text>100</Text>
        <Slider
          style={{width: 200, height: 40, margin:10}}
          minimumValue={100}
          maximumValue={1000}
          step={50}
          value={range}
          onValueChange={setRange}
          minimumTrackTintColor={PRIMARY_COLOR}
          maximumTrackTintColor="#363636"
        />
        <Text>1000</Text>
      </View>
      <Text style={{alignItems:"center"}}>Review Filter: {reviewFilter} stars </Text>
      <View style={styles.top2}>
        <Text>1</Text>
        <Slider
          style={{width: 200, height: 40, margin:10,}}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={reviewFilter}
          onValueChange={setReviewFilter}
          minimumTrackTintColor={PRIMARY_COLOR}
          maximumTrackTintColor="#363636"
        />
        <Text>5</Text>
      </View>
      <Button title="Save filters" onPress={() =>
        navigation.navigate({
          name: 'Home',
          params: {filters: {distance:range, rating:reviewFilter}},
          merge: true,
        })

      } />

    </View>
)};

export default Filters;
