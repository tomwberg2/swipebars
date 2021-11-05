import React, { useState } from "react";
import { View, ImageBackground, Alert} from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, FiltersButton, CardItem } from "../components";
import styles from "../assets/styles";
import { TabRouter } from "react-navigation";
import DATA from "../assets/data/bars.json"

const Home = ({rightSwipe, leftSwipe,route}:any) => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const [onGoingSwipe, setOnGoingSwipe] = useState("nan");
  // const [filter, setFilters] = useState(route.params.filters);
  const filter = route.params.filters
  const data = DATA.filter(fitsFilter)

  const onSwipeFunction = (e:any) => {
    if (e > 0){
      setOnGoingSwipe("right")
    } else {
      setOnGoingSwipe("left")
    }
  }

  const swipeEndFunction = () => {
    setOnGoingSwipe("nan")
  }

  function fitsFilter(item:any){
    if (filter == null){
      return true
    } else if (item.distance < filter.distance && item.price >= filter.price){
      return true
    } else {
      return false
    }
  }

  if (data.length == 0){
    Alert.alert("No bars fits your filters! Change filters!")
  }

  return (
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <FiltersButton currentFilters={filter}/>
        </View>
        <View style={[onGoingSwipe=="right"?styles.greenBorder:null, onGoingSwipe=="left"?styles.redBorder:null, styles.normalBorder]}>
          <CardStack
            loop
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={(newSwiper): void => setSwiper(newSwiper)}
            onSwipedRight = {(e) => rightSwipe(data[e])}
            onSwipedLeft = {(e) => leftSwipe(data[e])}
            onSwipe = {(e) => onSwipeFunction(e)}
            onSwipeEnd = {() => swipeEndFunction()}
          >
            {data.map((item:any) => (
              <Card key={item.id} style={styles.cardHeight}>
                <CardItem
                  key={item.name}
                  name={item.name}
                  image={item.image_url[0]}
                  rating = {item.rating}
                  closing = {item.closing}
                  distance = {item.distance}
                  tags = {item.categories}
                  price = {item.price}
                />
              </Card>
            ))}
          </CardStack>
        </View>

      </View>
  );
};

export default Home;
