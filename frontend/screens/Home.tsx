import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, Filters, CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";
import DATA from "../assets/data/bars.json"

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);


    // "id":"phrmiwZBeO4KQjd7sI-bUg",
    // "name":"Restaurang Carmen",
    // "image_url":"https:\/\/s3-media3.fl.yelpcdn.com\/bphoto\/EFDk-r7JM_Gjmk5KsH6_Cg\/o.jpg",
    // "url":"https:\/\/www.yelp.com\/biz\/restaurang-carmen-stockholm?adjust_creative=TOa8a0g6nrrOYYfuEq-hAA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TOa8a0g6nrrOYYfuEq-hAA",
    // "rating":3.0,
    // "review_count":12,
    // "phone":"+46 8 641 24 70",
    // "location":"Tj\u00e4rhovsgatan 14",
    // "closing":"0100",
    // "price":1,
    // "distance":216,
    // "rank":72.2666666667

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
                name={item.name}
                image={item.image_url}
                rating = {item.rating}
                adress = {item.location}
                closing = {item.closing}
                distance = {item.distance}
                linkToYelp = {item.url}
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
