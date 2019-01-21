import React from 'react';
import { Provider as StoreProvider, observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native';
import { Snackbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import { createStores } from 'app/stores';

import AppWrapper from "app/containers/AppWrapper";

const Home = () => {return (null)}
const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
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
          <View style={styles.container}>
            <AppContainer />
            <Snackbar style={{ zIndex: 10, backgroundColor: "#000" }} onDismiss={() => { appStore.snackOpen(false) }} visible={appStore.snackopen} >{appStore.snackmsg}</Snackbar>
          </View>
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