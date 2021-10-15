import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";
import DATA from "../assets/data/bars.json"

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);


  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
          onSwipedLeft = {() => console.log("hej")}
        >
          {DATA.map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image_url}
                name={item.name}
                description={item.location}
                price_level={'string'}
                isOnline={true}

                //
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
