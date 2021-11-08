import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image
} from "react-native";
import { CardItem, Icon } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";
import matches from "../assets/data/matches"

const Matches = ({matchList}:any) => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
        <View style={styles.top}>
          <Text style={styles.title}>Likes</Text>
          <Image source={require("../assets/icon.png")} style = {{width:48, height:48}}/>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns={1}
          data={matchList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <CardItem
                key={item.name}
                name={item.name}
                image={item.image_url[0]}
                rating = {item.rating}
                adress = {item.location}
                closing = {item.closing}
                distance = {item.distance}
                linkToYelp = {item.url}
                small
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  )
};

export default Matches;
