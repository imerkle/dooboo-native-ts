import { RadioButton, Text, IconButton } from "react-native-paper";
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
        const { t } = this.props;
        return (
            <>
                <View style={[stylesg.rowCenter, stylesg.header]}>
                    <IconButton
                        icon="arrow-back"
                        onPress={() => { this.props.navigation.goBack() }}
                    />
                    <Text style={stylesg.titleheader}>{t("Preferences")}</Text>
                </View>
                <View style={stylesg.pad20}>
                    <Text style={stylesg.h5}>{t("Change Language").toUpperCase()}</Text>
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
                </View>
            </>
        );
    }
}

export default withNamespaces("settings")(Preferences);
