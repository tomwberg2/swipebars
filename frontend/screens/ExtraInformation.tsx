import React, { useState, useLayoutEffect } from "react";
import { View, Pressable, Text} from "react-native";
// import CardStack, { Card } from "react-native-card-stack-swiper";
import {CardItem } from "../components";
import styles from "./styles/ExtraInformationStyles";
import DATA from "../assets/data/bars.json"
import openGoogleMaps from "../assets/utility"
import Slider from "react-native-hook-image-slider"
import { Icon, StarsList, PriceList} from "../components";


const ExtraInformation = ({route, navigation}:any) => {
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
            <View style={styles.shadow}>
              <Slider images={item.image_url}/>
            </View>
            <View style={{flexDirection:"row", flexGrow:1, justifyContent:"center"}}>
              {item.categories.map((tag, i) => 
                <Text key={i} style={styles.textSize}>{tag} {item.categories.length > i+1 ? " - ": ""} </Text>
              )}
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around", padding:10, paddingTop:20, height:250}}>
              <View style={{alignItems:"center"}}>
                <Text style={styles.textSize}><Icon name={"call"} size={20} color={"black"}/> {item.phone ? item.phone: "N/A"}</Text>
                <Text style={styles.textSize}><Icon name={"location"} size={20} color={"black"}/> {item.location}</Text>
                <Text style={styles.textSize}><Icon name={"walk"} size={20} color={"black"}/> {item.distance} meter</Text>
                <Pressable onPress={() => openGoogleMaps()} style={styles.button}>
                  <Text style={[styles.textSize, styles.whiteText]}>Take me there!</Text>
                </Pressable>
              </View>
              <View style={{alignItems:"center"}}>
                <Text style={styles.textSize}>Pricing</Text>
                <PriceList priceRating={item.price} color={"green"} size={20}/>
                <Text style={styles.textSize}>Rating</Text>
                <StarsList numberOfStars={item.rating} color={"gold"} size={20}/>
                <Pressable onPress={() => openGoogleMaps()} style={[styles.button, styles.red]}>
                  <Text style={[styles.textSize, styles.whiteText]}>To Yelp!</Text>
                </Pressable>
              </View>
            </View>
          </View>
          
        )}
      </View>
  );
};

export default ExtraInformation;