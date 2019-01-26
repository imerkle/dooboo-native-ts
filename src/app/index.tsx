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
import { initStorage, getKey } from "app/utils";

const tc = {
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
};
const getAppContainer = ({theme}) => {
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
      cardStyle: { backgroundColor: theme.app.bg },
      headerMode: "none",
      transitionConfig: () => (tc),
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

  return createAppContainer(DrawerNavigator);
}

const rootStore = createStores();
@observer
class AppFragment extends React.Component<any, any>{
  constructor(props) {
    super(props)
    initStorage();
    this.init();
  }
  init = async () => {
    const t0 = await getKey("theme");
    const l0 = await getKey("locale");
    if(t0) rootStore.appStore.setTheme(t0);
    if(l0) rootStore.appStore.setLocale(l0);
  }
  render() {
    const { appStore } = rootStore;
    const theme = appStore.theme == 0 ? themeDark : themeLight;

    const AppContainer = getAppContainer({theme});

    return (
      <StoreProvider rootStore={rootStore}>
        <PaperProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <View style={[styles.container, {backgroundColor: theme.app.bg}]}>
              <AppContainer />
              <Snackbar style={{ zIndex: 10, backgroundColor: theme.app.snackbar }} onDismiss={() => { appStore.snackOpen(false) }} visible={appStore.snackopen} >{appStore.snackmsg}</Snackbar>
            </View>
          </I18nextProvider>
        </PaperProvider>
      </StoreProvider>
    )
  }
}
const themeDark = {
  ...DefaultTheme,
  dark: true,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3c50a3',
    text: '#FFF',
  },
  app: {
    bg: "#303030",
    _202020: "#202020",
    _292726: "#292726",
    _1a1818: "#1a1818",
    nib: "#fbfbfb",
    fab: "#3c50a3",
    fab_selected: "#424448",
    h5: "#bec0c4",
    caption: "#71757c",
    snackbar: "#000000",
  }
};
const themeLight = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3c50a3',
    text: '#3f3f3f',
  },
  app: {
    bg: "#FFF",
    _202020: "#e0e0e0",
    _292726: "#ededed",
    _1a1818: "#f9f9f9",
    nib: "#fbfbfb",
    fab: "#3c50a3",
    fab_selected: "#424448",
    h5: "#bec0c4",
    caption: "#6c6c6c",
    snackbar: "#ededed",
  }
};

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 0,
  },
});


export default AppFragment;