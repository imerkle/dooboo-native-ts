import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';
import { Button, Text, List, FAB } from 'react-native-paper';

const color_86 = '#868686';
const fontSize_11 = 11;
const fontSize_16 = 16;
const paddingRight_3 = 3;

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        flex: 1,
    },
    leftBar: {
        flex: 0.25,
        backgroundColor: '#1a1818',
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 0,
    },
    midBar: {
        flex: 0.75,
        backgroundColor: '#292726',
    },
    topBar: {
        flex: 0.9,
    },
    bottomBar: {
        flex: 0.1,
        backgroundColor: '#202020',
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
    baseheader: {
        backgroundColor: '#202020',
        fontSize: 18,
        padding: 10,
        color: '#fbfbfb',
    },
    assets_menu_container: {
    },
    li: {
        padding: 20,
        flexDirection: 'row',
        alignItems: "center",
    },
    li_selected: {
        backgroundColor: '#383838',
    },
    rel: {
        fontSize: fontSize_16,
        paddingRight: paddingRight_3,
    },
    price: {
        fontSize: fontSize_16,
        paddingRight: paddingRight_3,
    },
    vol: {
        color: color_86,
        fontSize: fontSize_11,
        paddingRight: paddingRight_3,
        fontWeight: 'bold',
    },
    priceusd: {
        color: color_86,
        fontSize: fontSize_11,
    },
    base: {
        color: color_86,
    },
    arrow: {
        fontSize: 10,
        paddingRight: paddingRight_3,
    },
    sorter: {
        //box-shadow: 5px 3px 7px ;
        paddingVertical: 2,
        paddingHorizontal: 8,
        fontSize: 10,
        backgroundColor: '#201e1e',
        margin: 4,
        borderRadius: 4,
        shadowOffset: { width: 5, height: 3 },
        elevation: 7,
        shadowColor: '#1b1a1a',
        shadowOpacity: 1.0,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "transparent",
        opacity: .5,
        flex: 0.5,
        color: "#FFF",
    },
    sorter_selected: {
        borderColor: '#4D4D4D',
        opacity: 1,
    }
});

class Menu extends React.Component<any, any>{
    render(){
        return (
            <View style={styles.menu}>
                <View style={styles.leftBar}>
                    <View style={styles.fabdiv}>
                        <View style={[styles.nib, true && styles.nib_selected]}></View>
                        <FAB style={[styles.fab, true && styles.fab_selected]} icon="home" onPress={() => { }} />
                    </View>
                </View>
                <View style={styles.midBar}>
                    <View style={styles.topBar}>
                        {true &&
                            <List.Section>
                                <List.Item
                                    title="Home"
                                    description="Generate, Restore or Export Wallet"
                                />
                            </List.Section>
                        }
                        <ScrollView style={styles.assets_menu_container}>
                        </ScrollView>
                    </View>
                    <View style={styles.bottomBar}>
                    </View>
                </View>
            </View>            
        );
    }
}
export default Menu;
