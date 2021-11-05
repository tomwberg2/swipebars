import React from "react";
import {View } from "react-native";
import Icon from "./Icon";
import styles from "./styles/CardItemStyles"
import { FontAwesome } from '@expo/vector-icons'; 

const StarsList = ({
  numberOfStars,
  size,
  color
}: any) => {
  const stars = []

  for (let i = 0; i < 5; i++){
    if (i + 0.5 == numberOfStars){
      stars.push("star-half-sharp")
    } 
    else if (i <numberOfStars){
      stars.push("star")
    }
    else {
      stars.push("star-outline")
    }
  }

  return (
    <View style={{flexDirection:"row", alignItems:"center"}}>
      {stars.map((i, index) => 
        <Icon key={index} name={i} size={size} color={color}/> 
      )}
    </View>
  );
};

const PriceList = ({
    priceRating,
    size,
    color
  }:any) => {
  const priceList = new Array(priceRating).fill(0)

  return(
    <View style={{flexDirection:"row", alignItems:"center"}}>
      {priceList.map((i:any, index:any) => 
        <FontAwesome key={index} name="dollar" size={size} color={color} />
      )}
    </View> 
    )
}

export {StarsList, PriceList};