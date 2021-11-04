import React, { useState, useLayoutEffect } from "react";
import { View, Image, Text} from "react-native";
// import CardStack, { Card } from "react-native-card-stack-swiper";
import {CardItem } from "../components";
import styles from "./styles/ExtraInformationStyles";
import DATA from "../assets/data/bars.json"
import openGoogleMaps from "../assets/utility"

const Home = ({route, navigation}:any) => {
  const name = route.params.name;

  const item = DATA.find(bar => {
    return bar.name == name
  })

  useLayoutEffect(() => {
    if (item) navigation.setOptions({title: item.name})
  }, [navigation]);
  
  return (
      <View>
        {item && (
          <View>
            <Image source={{uri: item.image_url}} style={styles.imageStyle}/>
            <Text>Tel: {item.phone}</Text>
            <Text>Address: {item.location}</Text>
            <Text>Prisklass: {item.price}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Avstånd: {item.distance}</Text>
            <Text onPress={() => openGoogleMaps()} >Ta mig hit</Text>
          </View>
          
        )}
      </View>
  );
};

export default Home;