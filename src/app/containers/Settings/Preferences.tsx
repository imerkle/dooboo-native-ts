import { withTheme, RadioButton, Text, IconButton, Switch, TouchableRipple, Paragraph } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import * as React from "react";
import stylesg from "app/style";
import { inject, observer } from 'mobx-react';
import { LOCALES } from "app/constants";
import { withNamespaces } from 'react-i18next';

@withNavigation
@inject('rootStore')
@observer
class Preferences extends React.Component<any, any> {
    public render() {
        const { appStore } = this.props.rootStore;
        const { t, theme } = this.props;
        return (
            <>
                <View style={[stylesg.rowCenter, stylesg.header, { backgroundColor: theme.app._1a1818}]}>
                    <IconButton
                        icon="arrow-back"
                        onPress={() => { this.props.navigation.goBack() }}
                    />
                    <Text style={stylesg.titleheader}>{t("Preferences")}</Text>
                </View>
                <View style={stylesg.pad20}>
                    <Text style={[stylesg.h5, { color: theme.app.h5 }]}>{t("Change Language").toUpperCase()}</Text>
                    <RadioButton.Group
                        onValueChange={value => appStore.setLocale(value)}
                        value={appStore.locale}
                    >
                        {Object.keys(LOCALES).map((o, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <Text>{LOCALES[o].displayName}</Text>
                                    <RadioButton value={o} />
                                </React.Fragment>
                            )
                        })}
                    </RadioButton.Group>

                    <Text style={[stylesg.h5, { color: theme.app.h5 }]}>{t("Change Theme").toUpperCase()}</Text>
                    <TouchableRipple
                        onPress={() =>
                            appStore.setTheme(+!appStore.theme)
                        }
                    >
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 8,}} pointerEvents="none">
                            <Paragraph>{appStore.theme == 0 ? "Dark Theme" : "Light Theme"}</Paragraph>
                            <Switch value={!!appStore.theme} />
                        </View>
                    </TouchableRipple>                    
                </View>
            </>
        );
    }
}

export default withTheme<any>(withNamespaces("settings")(Preferences));
