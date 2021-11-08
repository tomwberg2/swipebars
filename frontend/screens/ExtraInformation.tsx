import React, { useState, useLayoutEffect } from "react";
import { View, Pressable, Text, Image, Linking} from "react-native";
// import CardStack, { Card } from "react-native-card-stack-swiper";
import {CardItem } from "../components";
import styles from "./styles/ExtraInformationStyles";
import DATA from "../assets/data/bars.json"
import openGoogleMaps from "../assets/utility"
import Slider from "react-native-hook-image-slider"
import { Icon, StarsList, PriceList} from "../components";


const ExtraInformation = ({route, navigation}:any) => {
  const isOnline = true
  const name = route.params.name;

  const item = DATA.find(bar => {
    return bar.name == name
  })

  useLayoutEffect(() => {
    if (item) navigation.setOptions({headerTitle: () => {
              return(
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                  <Text style={{fontSize:20, marginRight:"auto"}}>{item.name}</Text>
                  <Image source={require("../assets/icon.png")} style = {{width:32, height:32, }}/> 
                </View>
              )
              
            }})
  }, [navigation]);
  
  const formatedClosing = (closing:string) => {
    const time = closing.split("")
    const hours = time.slice(0,2)
    const minutes = time.slice(2,4)
    return hours.join("") + ":" + minutes.join("")
  }


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
                <View style={styles.status}>
                  <View style={isOnline ? styles.online : styles.offline} />
                  <Text style={styles.statusText}>
                    {isOnline ? `Open - Closes at ${formatedClosing(item.closing)}` : `Closed - Opens at ${formatedClosing(item.closing)}`}
                  </Text>
                </View>
                <Pressable onPress={() => openGoogleMaps()} style={styles.button}>
                  <Text style={[styles.textSize, styles.whiteText]}>Take me there!</Text>
                </Pressable>
              </View>
              <View style={{alignItems:"center"}}>
                <Text style={styles.textSize}>Pricing</Text>
                <PriceList priceRating={item.price} color={"green"} size={20}/>
                <Text style={styles.textSize}>Rating</Text>
                <StarsList numberOfStars={item.rating} color={"gold"} size={20}/>
                <Pressable onPress={() => Linking.openURL(item.url)} style={[styles.button, styles.red]}>
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