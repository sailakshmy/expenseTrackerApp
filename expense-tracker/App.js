import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Recent" component={RecentExpenses} />
      <BottomTabs.Screen name="All" component={AllExpenses} />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Overview" component={BottomTabNavigation} />

          <Stack.Screen name="Manage" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
