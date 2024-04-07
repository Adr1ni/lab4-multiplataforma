import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home";
import Setting from "./src/Settings";
import Notification from "./src/Notifications";
import Product from "./src/Products";
import SocialMedia from "./src/SocialMedia";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Notification" component={Notification}/>
        <Drawer.Screen name="Product" component={Product}/>
        <Drawer.Screen name="Social Media" component={SocialMedia}/>
        <Drawer.Screen name="Profile Settings" component={Setting}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}