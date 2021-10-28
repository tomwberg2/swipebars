import React, { useState } from "react";
import { View, ImageBackground, Alert} from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { City, FiltersButton, CardItem } from "../components";
import styles from "../assets/styles";
import DATA from "../assets/data/bars.json"

const Home = ({setMatches, route}:any) => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const [data, setData] = useState(DATA)
  let filters:any = null; 
 
  const updateMatches = (e:any) => {
    const information = data[e]
    setMatches(information)
    // console.log(setMatches, matches2, matches)
  }

  function fitsFilter(item:any){
    if (filters == null){
      return true
    } else if (item.distance < filters.distance && item.rating >= filters.rating){
      return true
    } else {
      return false
    }
  }

  React.useEffect(() => {
    if (route.params?.filters) {
      filters = route.params.filters
      setData(data.filter(fitsFilter))
    }
  }, [route.params?.filters]);

  if (data.length == 0){
    setData(DATA)
    console.log("COOOL")
    Alert.alert("No bars fits your filters! No filters are currently active")
  }

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <FiltersButton/>
        </View>
        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
          onSwipedRight = {(e) => updateMatches(e)}
        >
          {data.map((item) => (
            <Card key={item.id}>
              <CardItem
                key={item.name}
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
