import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AddIngredientScreen from "./screens/AddIngredientScreen";
import RecipeScreen from "./screens/RecipeScreen";
import GroceryPlannerScreen from "./screens/GroceryPlannerScreen";

import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebaseConfig";

// Initialize Firebase
initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddIngredient" component={AddIngredientScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="Grocery" component={GroceryPlannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
