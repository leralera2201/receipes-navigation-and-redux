import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import MyStackDrawer from "./navigation/MealsNavigator";
import {enableScreens} from 'react-native-screens'
import {Provider} from "react-redux";
import store from "./store/store";

enableScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [isLoadedFonts, setIsLoadedFonts] = useState(false)

  if(!isLoadedFonts){
    return <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoadedFonts(true)}
    />
  }

  return (
      <Provider store={store}>
        <NavigationContainer>
          <MyStackDrawer/>
        </NavigationContainer>
      </Provider>
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
