import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import { withTheme, List, FAB, IconButton } from 'react-native-paper';
import { withNavigation } from "react-navigation";
import { withNamespaces } from 'react-i18next';


const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        flex: 1,
    },
    row1: {
        flex: 0.93,
        flexDirection: 'row',
    },
    row2: {
        flex: 0.07,
    },
    col11: {
        flex: 0.25,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 0,
    },
    col12: {
        flex: 0.75,
    },
    fabdiv: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: -5,
    },
    nib_selected: {
        opacity: 1
    },
    nib: {
        margin: 5,
        padding: 3,
        borderTopStartRadius: 0,
        borderTopEndRadius: 12,
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 0,
        opacity: 0,
    },
    fabImg: {
        height: 56,
        width: 56,
        borderRadius: 28,
    },
    fab_selected: {
        borderRadius: 12,
    },
    assets_menu_container: {
    },
});        
@withNavigation
class Menu extends React.Component<any, any>{
    render(){
        const { t, theme } = this.props;
        const index = 0;
        
        return (
            <View style={styles.root}>
                <View style={[styles.row1, { backgroundColor: theme.app._202020}]}>
                    <View style={[styles.col11, { backgroundColor: theme.app._1a1818 }]}>
                        <View style={styles.fabdiv}>
                            <View style={[styles.nib, { backgroundColor: theme.app.nib }, index == 0 && styles.nib_selected]}></View>
                            <FAB style={[{ backgroundColor: theme.app.fab }, index == 0 && styles.fab_selected, index == 0 && { backgroundColor: theme.app.fab_selected } ]} icon="home" onPress={() => { this.props.navigation.navigate('Home') }} />
                        </View>
                    </View>
                    <View style={[styles.col12, { backgroundColor: theme.app._292726}]}>
                        {true &&
                            <List.Section>          
                                <List.Item
                                    title={t("Home")}
                                    left={props => <List.Icon {...props} icon="home" />}
                                />
                            </List.Section>
                        }
                        <ScrollView style={styles.assets_menu_container}>
                        </ScrollView>
                    </View>
                </View>
                <View style={[styles.row2, { backgroundColor: theme.app._202020 }]}>
                    <IconButton
                        icon="settings"
                        onPress={() => { this.props.navigation.navigate('Settings') }}
                    />
                </View>
            </View>            
        );
    }
}

export default withTheme<any>(withNamespaces("app")(Menu));
