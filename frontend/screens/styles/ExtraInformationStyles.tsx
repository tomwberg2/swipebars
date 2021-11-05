import { StyleSheet } from "react-native";
import {Colors, DIMENSION_HEIGHT, DIMENSION_WIDTH} from "../../styles"

export default StyleSheet.create({
  imageStyle: {
      borderRadius: 8,
      width: DIMENSION_WIDTH,
      height: DIMENSION_HEIGHT*0.50,
    },

  textSize:{
    fontSize: 16,
    marginTop: 10,
  },

  shadow:{
    backgroundColor:"gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 6,
  },
  
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: "auto",
  },

  whiteText:{
    color:"white",
    marginTop: 0,
  },

  red:{
    backgroundColor:"red"
  }
});