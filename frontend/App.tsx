import React from "react";
import { NavigationContainer, useNavigation} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Filters, Matches, Profile } from "./screens";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./assets/styles";
import TabBarIcon from "./components/TabBarIcon";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const App = () => {

  const matchList:Array<Object> = []
  const updateMatches = (e:Object) => matchList.push(e)
  
  const HomeComp = (props:any) => <Home setMatches={(e:Object) => updateMatches(e)} {...props} />

  const MatchesComp = () => <Matches matchList={matchList} />

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
                      text="Matches"
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
        />

      </Stack.Navigator>
    </NavigationContainer>
)};

export default App;
