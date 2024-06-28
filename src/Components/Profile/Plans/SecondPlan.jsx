import { View, Text, Image, StyleSheet } from 'react-native';

import React, { useContext } from 'react'
import greentick from '../../../assets/Icons/greentick.png'
import closetick from '../../../assets/Icons/redclose.png'
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../DarkMode/ThemeContext';

const SecondPlan = () => {
    const { theme } = useContext(ThemeContext)

    const firstPlan = [
        {
            text: "second feature",
            img: greentick,
            id:21
        },
        {
            text: "second plan second feature",
            img: greentick,
            id:22
        },
        {
            text: "second plan third feature",
            img: greentick,
            id:23
        },
        {
            text: "second plan fourth feature",
            img: greentick,
            id:24
        },
        {
            text: "second plan fifth feature",
            img: greentick,
            id:25
        },
        {
            text: "sixth feature",
            img: closetick,
            id:26
        },
        {
            text: "seventh feature",
            img: closetick,
            id:27
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
export default SecondPlan;


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