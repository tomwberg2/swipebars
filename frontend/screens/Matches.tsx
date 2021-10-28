import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
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
          <Text style={styles.title}>Matches</Text>
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
                image={item.image_url}
                rating = {item.rating}
                adress = {item.location}
                closing = {item.closing}
                distance = {item.distance}
                linkToYelp = {item.url}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  )
};

export default Matches;
