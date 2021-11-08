import React, {useState, useEffect} from "react";
import { NavigationContainer, useNavigation} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Filters, Matches, Profile, ExtraInformation } from "./screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const modalStack = createStackNavigator();


const App = () => {
  const matchList:any = []
  // const [data, setData] = useState(DATA);
  // const matchList:Array<Object> = []
  let MatchesComp = () => <Matches matchList={matchList} />

  const rightSwipe = (e:any) => {
    matchList.push(e)
    MatchesComp = () =>  <Matches matchList={matchList} />
  }

  const leftSwipe = (e:any) => {
    console.log("leftSwipe")
    // setData(data.filter((x) => x.id != data[e].id))
  }

  const HomeComp = (props:any) => <Home 
          rightSwipe={(e:Object) => rightSwipe(e)} 
          leftSwipe={(e:Object) => leftSwipe(e)} 
          {...props} 
          />

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          options={{ headerShown: false, animationEnabled: false }}
        >
          {() => (
            <Tab.Navigator
              tabBarOptions={{
                showLabel: false,
                activeTintColor: PRIMARY_COLOR,
                inactiveTintColor: DARK_GRAY,
                labelStyle: {
                  fontSize: 14,
                  textTransform: "uppercase",
                  paddingTop: 10,
                },
                style: {
                  backgroundColor: WHITE,
                  borderTopWidth: 0,
                  marginBottom: 0,
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  shadowColor: BLACK,
                  shadowOffset: { height: 0, width: 0 },
                },
              }}
            >
              <Tab.Screen
                name="Home"
                component={HomeComp}
                initialParams={{"filters":null}}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      iconName="search"
                      text="Explore"
                    />
                  ),
                }}
              />

              <Tab.Screen
                name="Matches"
                component={MatchesComp}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      iconName="heart"
                      text={`Likes`}
                    />
                  ),
                }}
              />
              
            </Tab.Navigator>
          )}
        </Stack.Screen>

        <Stack.Screen 
          name="Filters" 
          component={Filters}
          options = {
            {headerBackTitleVisible: false}
          }
        />
        <Stack.Screen 
          name="Bar Info" 
          component={ExtraInformation}
          options = {
            {headerBackTitleVisible: false}
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
)};

export default App;
