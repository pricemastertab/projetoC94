import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import loginScreen from './screens/Login'
import { NavigationContainer } from "@react-navigation/native";
import registerScreen from "./screens/RegisterScreen";
import AjudaScreen from "./screens/predir_ajuda";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'login'
      screenOptions = {{
        headerShow: false,
        gestureEnable: false,
        headerTintColor: 'black' 
      }}
    >
        <Stack.Screen name='login' component={loginScreen} />
        <Stack.Screen name='registrar' component={registerScreen} />
        <Stack.Screen name="ajuda" component={AjudaScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
