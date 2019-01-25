import { List, IconButton, Text } from "react-native-paper";
import { StyleSheet, View} from "react-native";
import { withNavigation } from "react-navigation";
import * as React from "react";
import stylesg from "app/style";
import { withNamespaces } from 'react-i18next';

@withNavigation
class Settings extends React.Component<any, any> {
    public render() {
        const { t } = this.props;
        const settingMenu = [
            {
                name: t("menu:My Account"),
                icon: "account-box"
            },
            {
                name: t("menu:My Preferences"),
                icon: "settings-applications",
                nav: "Preferences",
            },
        ];        
        return (
            <View style={styles.root}>
                <View style={styles.col1}>
                    <View style={[stylesg.rowCenter, stylesg.header]}>
                        <IconButton
                            icon="arrow-back"
                            onPress={() => { this.props.navigation.dismiss() }}
                        />                        
                        <Text style={stylesg.titleheader}>{t("Settings")}</Text>
                    </View>
                    <List.Section>
                        {settingMenu.map((o, i) => {
                            return (
                                <List.Item
                                    key={i}
                                    onPress={event => this.props.navigation.navigate(o.nav)}
                                    title={o.name}
                                    left={props => <List.Icon {...props} icon={o.icon} />}                                    
                                />
                            )
                        })}
                    </List.Section>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "column",
    },
    col1: {

    },
});
export default withNamespaces("settings")(Settings);
