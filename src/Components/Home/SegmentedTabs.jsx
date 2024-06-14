import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SegmentControl from 'react-native-segment-control';
import { ScrollView } from 'react-native-gesture-handler';
import TrendingSlides from './TrendingSlides';
import Colors from '../../Constants/Colors';


const One = () => {
    return <TrendingSlides />;
};
const Two = () => {
    return <Text style={styles.text}>This is second view</Text>;
};
const Three = () => {
    return <Text style={styles.text}>This is 3rd view</Text>;
};
const Four = () => {
    return <Text style={styles.text}>This is 4th view</Text>;
};
const segments = [
    {
        title: 'All',
        view: One
    },
    {
        title: 'Latest',
        view: Two
    },
    {
        title: 'New Models',
        view: Three
    },
    {
        title: 'Verified',
        view: Four
    },
    {
        title: 'Active Now',
        view: Four
    },
];


const SegmentedTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>


                <SegmentControl segments={segments}
                    style={styles.tab}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        alignSelf: 'center',
        margin: 50
    },
    tab: {
        width: "auto",
        height: 40,
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        paddingHorizontal: 25,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        marginVertical: 5,
        elevation: 6,
    },
});

export default SegmentedTabs

