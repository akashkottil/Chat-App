import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import SegmentControl from '../Home/SegmentControl';
import { ScrollView } from 'react-native-gesture-handler';
import TrendingSlides from './TrendingSlides';
// import Colors from '../../Constants/Colors';
import All from './HomeTabs/All';
import Latest from './HomeTabs/Latest';
import NewModels from './HomeTabs/NewModels';
import VerifedAi from './HomeTabs/VerifedAi';
import ActiveNow from './HomeTabs/ActiveNow';


const firstTab = () => {
    return <All/>;
};
const secondTab = () => {
    return <Latest/>;
};
const thirdTab = () => {
    return <NewModels/>;
};
const fourthTab = () => {
    return <VerifedAi/>;
};
const fifthTab = () => {
    return <ActiveNow/>;
};

const segments = [
    {
        title: 'All',
        view: firstTab
    },
    {
        title: 'Latest',
        view: secondTab
    },
    {
        title: 'New Models',
        view: thirdTab
    },
    {
        title: 'Verified',
        view: fourthTab
    },
    {
        title: 'Active Now',
        view: fifthTab
    },
];





const SegmentedTabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <SegmentControl segments={segments}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default SegmentedTabs

