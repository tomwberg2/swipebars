import React, { useState } from "react";
import { View, ImageBackground, Alert} from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, FiltersButton, CardItem } from "../components";
import styles from "../assets/styles";

const Home = ({rightSwipe, leftSwipe, data, route}:any) => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const [onGoingSwipe, setOnGoingSwipe] = useState("nan");
  // const [data, setData] = useState(DATA);
  const filters = route.params.filters; 
  data = data.filter(fitsFilter)
  
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
    if (filters== null){
      return true
    } else if (item.distance < filters.distance && item.price >= filters.price){
      return true
    } else {
      return false
    }
  }

  if (data.length == 0){
    data = data
    Alert.alert("No bars fits your filters! No filters are currently active")
  }

  return (
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <FiltersButton currentFilters={filters}/>
        </View>
        <View style={[onGoingSwipe=="right"?styles.greenBorder:null, onGoingSwipe=="left"?styles.redBorder:null, styles.normalBorder]}>
          <CardStack
            loop
            verticalSwipe={false}
            renderNoMoreCards={() => null}
            ref={(newSwiper): void => setSwiper(newSwiper)}
            onSwipedRight = {(e) => rightSwipe(e)}
            onSwipedLeft = {(e) => leftSwipe(e)}
            onSwipe = {(e) => onSwipeFunction(e)}
            onSwipeEnd = {() => swipeEndFunction()}
          >
            {data.map((item) => (
              <Card key={item.id} style={styles.cardHeight}>
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
              </Card>
            ))}
          </CardStack>
        </View>

      </View>
  );
};

export default Home;
