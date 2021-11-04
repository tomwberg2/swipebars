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
      <Text style={{alignItems:"center"}}>Distance Filter: {range} m </Text>
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
        <Text>1000</Text>
      </View>
      <Text style={{alignItems:"center"}}>Price Filter: {priceFilter} stars </Text>
      <View style={styles.top2}>
        <Text>1</Text>
        <Slider
          style={{width: 200, height: 40, margin:10,}}
          minimumValue={1}
          maximumValue={5}
          step={1}
          value={initialPrice}
          onValueChange={setPriceFilter}
          minimumTrackTintColor={PRIMARY_COLOR}
          maximumTrackTintColor="#363636"
        />
        <Text>5</Text>
      </View>
      <Button title="Save filters" onPress={() =>
        navigation.navigate({
          name: 'Home',
          params: {filters: {distance:range, price:priceFilter}},
          merge: true,
        })

      } />

    </View>
)};

export default Filters;
