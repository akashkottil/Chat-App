import { View, Text, Image, StyleSheet } from 'react-native';

import React, { useContext } from 'react'
import greentick from '../../../assets/Icons/greentick.png'
import closetick from '../../../assets/Icons/redclose.png'
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../DarkMode/ThemeContext';

const FirstPlan = () => {
    const { theme } = useContext(ThemeContext)

    const firstPlan = [
        {
            text: "first feature",
            img: greentick,
            id:11
        },
        {
            text: "second feature",
            img: greentick,
            id:12
        },
        {
            text: "third feature",
            img: greentick,
            id:13
        },
        {
            text: "fourth feature",
            img: closetick,
            id:14
        },
        {
            text: "fifth feature",
            img: closetick,
            id:15
        },
        {
            text: "sixth feature",
            img: closetick,
            id:16
        },
        {
            text: "seventh feature",
            img: closetick,
            id:17
        },
    ]

    return (
        <ScrollView style={styles.contentView} showsVerticalScrollIndicator={false}>
            
                {
                    firstPlan.map((item, index)=>(
                        <View key={item.id} style={styles.content}>
                        <View>
                    <Text style={[styles.text, { color: theme.white }]}>{item.text}</Text>
                </View>
                <View>
                    <Image source={item.img} style={styles.greentick} />
                </View>
            </View>
                    ))
                }
        </ScrollView>
    )
}
export default FirstPlan;


const styles = StyleSheet.create({
    Container: {

    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginVertical: 10,
        justifyContent:"space-between"
    },
    greentick: {
        height: 25,
        width: 25
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
    },
    contentView: {
        height: "60%",
        alignSelf: "stretch",
        paddingVertical: 10,
        paddingHorizontal: 20
    }
});