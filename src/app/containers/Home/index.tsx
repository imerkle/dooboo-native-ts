import * as React from 'react';
import { ScrollView, View, Image, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import { changelog } from "app/constants";

import stylesg from "app/style";
import { withNamespaces } from 'react-i18next';

class Home extends React.Component<any, any> {
    state = {
        currentIndex: 0,
    }
    render = () => {
        const { t } = this.props;
        return (
            <View style={{ marginTop: 30 }}>
                <Carousel
                    data={entries}
                    renderItem={SliderImage}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                />
                <ScrollView style={stylesg.pad20}>
                    <Text style={stylesg.h4}>{t("Changelog").toUpperCase()}</Text>
                    {changelog.map((o, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Text style={stylesg.h5} >{o.title.toUpperCase()}</Text>
                                {o.captions.map((ox, ix) => {
                                    return (
                                        <Text key={ix} style={stylesg.caption}>{`\u2022 ${ox}`}</Text>
                                    )
                                })}
                                <Text style={stylesg.h5} >{o.title.toUpperCase()}</Text>
                                {o.captions.map((ox, ix) => {
                                    return (
                                        <Text key={ix} style={stylesg.caption}>{`\u2022 ${ox}`}</Text>
                                    )
                                })}                                
                            </React.Fragment>
                        )

                    })}
                </ScrollView>
            </View>
        );
    };
}

const wp = (percentage) => {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const sliderWidth = viewportWidth;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entries = [
{
    illustration: "https://occ-0-2704-2186.1.nflxso.net/art/f90c7/057fa9bd0fc04ccea809baaffca34fb3457f90c7.jpg",
    title: "Lorem Ipsum"
},
{
    illustration: "https://assets.kucoin.com/web/pc/static/box3_en.93f2f3a1.png",
    title: "Lorem Ipsum 2"
},
];
const SliderImage = ({ item, index }) => {
    return (
        <Image 
            source={{ uri: entries[index].illustration }}
            style={{height: 250}}
        />
    );
}
export default withNamespaces("home")(Home);