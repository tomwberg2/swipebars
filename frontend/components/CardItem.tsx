import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, Linking } from "react-native";
import Icon from "./Icon";
import { CardItemT } from "../types";
import {
  WHITE,
} from "../assets/styles";
import styles from "./styles/CardItemStyles";
import { useNavigation } from "@react-navigation/native";
// import DATA from "../assets/data/bars.json"

const CardItem = ({
  // TODO: make these contain relevant information about bars.
  name,
  image,
  rating,
  adress,
  closing,
  distance,
  linkToYelp,
  small, 

}: CardItemT) => {
  const isOnline = true //Todo! Change so that it works interactively with the time set
  const stars = []
  const navigation = useNavigation()
  
  for (let i = 0; i < 5; i++){
    if (i + 0.5 == rating){
      stars.push("star-half-sharp")
    } 
    else if (i <rating){
      stars.push("star")
    }
    else {
      stars.push("star-outline")
    }
  }

  const formatedClosing = () => {
    const time = closing.split("")
    const hours = time.slice(0,2)
    const minutes = time.slice(2,4)
    return hours.join("") + ":" + minutes.join("")
  }

  return (
    <View style={small ? styles.smallContainerCardItem : styles.containerCardItem}>
      <View style={{alignItems:"center"}}>
        <TouchableOpacity  onPress={() => {
            navigation.navigate("Bar Info", {
              name,
            })
          }   
        }>
          <Image source={{uri: image}} style={small ? styles.smallImage: styles.image} />
        </TouchableOpacity>
        {adress && (
            <View style={small ? styles.smallDistance : styles.distance}>
              <Text style={styles.distanceText}>
                <Icon name="walk-sharp" size={13} color={WHITE} /> {distance} Meter
              </Text>
            </View>
        )}
      </View>
      <View style={styles.contentContainer}>
        {/* NAME */}
        <Text style={small ? styles.smallName : styles.name}>{name}</Text>
        <Text style={styles.adressText}>{adress}</Text>

        {/* Rating */}
        {rating && (
          <View style={styles.rating}>
            {stars.map((i, index) => 
            <Icon key={index} name={i} size={25} color={"gold"}/> 
            )}
          </View>
        )}
        {/* PRICE LEVEL */}
        {closing && (
          <View style={styles.status}>
            <View style={isOnline ? styles.online : styles.offline} />
            <Text style={styles.statusText}>
              {isOnline ? `Open - Closes at ${formatedClosing()}` : `Closed - Opens at ${formatedClosing()}`}
            </Text>
          </View>
        )} 
      </View>
    </View>
  );
};

export default CardItem;