import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import { Button, Text, List, FAB, IconButton } from 'react-native-paper';
import { withNavigation } from "react-navigation";
import { withNamespaces } from 'react-i18next';

const color_86 = '#868686';
const fontSize_11 = 11;
const fontSize_16 = 16;
const paddingRight_3 = 3;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        flex: 1,
    },
    row1: {
        flex: 0.93,
        flexDirection: 'row',
        backgroundColor: '#202020',
    },     
    row2: {
        flex: 0.07,
        backgroundColor: '#202020',
    },    
    col11: {
        flex: 0.25,
        backgroundColor: '#1a1818',
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 0,
    },
    col12: {
        flex: 0.75,
        backgroundColor: '#292726',
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
        backgroundColor: '#fbfbfb',
        borderTopStartRadius: 0,
        borderTopEndRadius: 12,
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 0,
        opacity: 0,
    },
    fab: {
        backgroundColor: '#3c50a3',
    },
    fabImg: {
        height: 56,
        width: 56,
        borderRadius: 28,
    },
    fab_selected: {
        borderRadius: 12,
        backgroundColor: '#424448',
    },
    assets_menu_container: {
    },
});

@withNavigation
class Menu extends React.Component<any, any>{
    render(){
        const { t } = this.props;
        return (
            <View style={styles.root}>
                <View style={styles.row1}>
                    <View style={styles.col11}>
                        <View style={styles.fabdiv}>
                            <View style={[styles.nib, true && styles.nib_selected]}></View>
                            <FAB style={[styles.fab, true && styles.fab_selected]} icon="home" onPress={() => { this.props.navigation.navigate('Home') }} />
                        </View>
                    </View>
                    <View style={styles.col12}>
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
                <View style={styles.row2}>
                    <IconButton
                        icon="settings"
                        onPress={() => { this.props.navigation.navigate('Settings') }}
                    />
                </View>
            </View>            
        );
    }
}
export default withNamespaces("app")(Menu);
