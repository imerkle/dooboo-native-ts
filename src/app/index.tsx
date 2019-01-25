import React from 'react';
import { Provider as StoreProvider, observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native';
import { Snackbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import { createStores } from 'app/stores';

import { I18nextProvider } from "react-i18next";
import i18n from './i18n';

import Home from "app/containers/Home";
import AppWrapper from "app/containers/AppWrapper";

import Settings from "app/containers/Settings";
import Preferences from "app/containers/Settings/Preferences";

const StackNavigator = createStackNavigator({
  Settings: { 
    screen: Settings,
  },
  Preferences: {
    screen: Preferences,
  },  
}, {
  initialRouteName: 'Settings',
  headerBackTitleVisible: true,
  cardStyle: { backgroundColor: '#303030' },
  headerMode: "none",
  transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [layout.initWidth, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [
            index - 1,
            index - 0.99,
            index,
            index + 0.99,
            index + 1
          ],
          outputRange: [0, 1, 1, 0.3, 0]
        });

        return { opacity, transform: [{ translateX }] };
      }
  }),  
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Settings: {
    screen: StackNavigator,
  }  
}, {
    drawerWidth: 300,
    contentComponent: AppWrapper,
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(DrawerNavigator);

const rootStore = createStores();

@observer
class AppFragment extends React.Component<any, any>{
  constructor(props) {
    super(props)
  }
  render() {
    const { appStore } = rootStore;
    return (
      <StoreProvider rootStore={rootStore}>
        <PaperProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <View style={styles.container}>
              <AppContainer />
              <Snackbar style={{ zIndex: 10, backgroundColor: "#000" }} onDismiss={() => { appStore.snackOpen(false) }} visible={appStore.snackopen} >{appStore.snackmsg}</Snackbar>
            </View>
          </I18nextProvider>
        </PaperProvider>
      </StoreProvider>
    )
  }
}
const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3c50a3',
    text: '#FFF',
  }
};

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#303030',
    margin: 0,
  },
});


export default AppFragment;