import * as React from 'react';
import { observer, inject } from 'mobx-react';

import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Menu from './Menu';
import { DrawerActions } from 'react-navigation';

@inject('rootStore')
@observer
class AppWrapper extends React.Component<any, any>{
    constructor(props) {
        super(props)
    }
    private base;
    onMenuItemSelected = (base) => {
        this.base = base;
        this.props.rootStore.exchangeStore.setBase(base)
        if (!base) {
            this.props.navigation.navigate('Empty');
        }
    }
    onMenuItemSelected2 = (rel) => {
        this.props.rootStore.exchangeStore.setRel(rel)
        this.props.rootStore.exchangeStore.init()
        this.props.navigation.navigate('Exchange', {
            rel: rel,
            base: this.base,
        });
        DrawerActions.closeDrawer()
    }
    toggleSort = (i) => {
        //add later sort by coin/price
    }
    render() {
        const { appStore } = this.props.rootStore;
        const sorter = { value: 1, dir: 1 };
        return (
            <SafeAreaView style={styles.container}>
                <Menu />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppWrapper;