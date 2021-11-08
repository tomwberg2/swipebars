import React, {useState} from "react";
import {
  Text,
  View,
  Button
} from "react-native";
import styles from "../assets/styles";
import Slider from '@react-native-community/slider';
import { PRIMARY_COLOR } from "../assets/styles";

const Filters = ({navigation, route}:any) => {
  const currentFilters = route.params.currentFilters
  let initialRange = currentFilters ? currentFilters.distance : 500
  let initialPrice = currentFilters ? currentFilters.price : 1
  

  const [range, setRange] = useState(initialRange)
  const [priceFilter, setPriceFilter] = useState(initialPrice)

  return (
    <View style={styles.filterPage}>
      <Text style={{alignItems:"center"}}>Maximum Distance: {range} m </Text>
      <View style={styles.top2}>
        <Text>100</Text>
        <Slider
          style={{width: 200, height: 40, margin:10}}
          minimumValue={100}
          maximumValue={2000}
          step={100}
          value={initialRange}
          onValueChange={setRange}
          minimumTrackTintColor={PRIMARY_COLOR}
          maximumTrackTintColor="#363636"
        />
        <Text>2000</Text>
      </View>
      <Text style={{alignItems:"center"}}>Maximum Price Class: {priceFilter}</Text>
      <View style={styles.top2}>
        <Text>1</Text>
        <Slider
          style={{width: 200, height: 40, margin:10}}
          minimumValue={1}
          maximumValue={4}
          step={1}
          value={initialPrice}
          onValueChange={setPriceFilter}
          minimumTrackTintColor={PRIMARY_COLOR}
          maximumTrackTintColor="#363636"
        />
        <Text>4</Text>
      </View>
      <Button title="Save filters" color={PRIMARY_COLOR} onPress={() =>
        navigation.navigate({
          name: 'Home',
          params: {filters: {distance:range, price:priceFilter}},
          merge: true,
        })

      } />

    </View>
)};

export default Filters;
