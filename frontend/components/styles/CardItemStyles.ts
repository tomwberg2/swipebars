import { StyleSheet } from "react-native";
import {Colors, DIMENSION_HEIGHT, DIMENSION_WIDTH} from "../../styles"

export default StyleSheet.create({
  containerCardItem: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    alignItems: "center",
    maxHeight: DIMENSION_HEIGHT*0.8,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    marginTop:20,
    shadowColor: Colors.BLACK,
    shadowOffset: { height: 0, width: 0 },
  },

  imageStyle: {
      borderRadius: 8,
      width: DIMENSION_WIDTH-20,
      height: DIMENSION_HEIGHT*0.50,
    },

  nameStyle: {
      paddingTop: 10,
      paddingBottom: 0,
      color: "#363636",
      fontSize: 22,
    },

  adressText: {
    fontSize: 17,
    fontStyle: "italic",
    padding: 0,
    margin: 0,

  },

  distance: {
    marginTop: -35,
    backgroundColor: Colors.PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  distanceText: {
    color: Colors.WHITE,
  },

  descriptionCardItem: {
    color: Colors.GRAY,
    textAlign: "center",
  },

  rating:{
    flexDirection: "row",
    padding: 20,
  },

  status: {
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    fontSize: 15,
  },
  online: {
    width: 12,
    height: 12,
    backgroundColor: "green",
    borderRadius: 12,
    marginRight: 4,
  },
  offline: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 3,
    marginRight: 4,
  },
});