import { View, Text, Image, StyleSheet } from 'react-native';

import React, { useContext } from 'react'
import greentick from '../../../assets/Icons/greentick.png'
import closetick from '../../../assets/Icons/redclose.png'
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../DarkMode/ThemeContext';

const ThirdPlan = () => {
    const { theme } = useContext(ThemeContext)

    const firstPlan = [
        {
            text: "third feature",
            img: greentick,
            id:31
        },
        {
            text: "third plan second feature",
            img: greentick,
            id:32
        },
        {
            text: "third plan third feature",
            img: greentick,
            id:33
        },
        {
            text: "third plan fourth feature",
            img: greentick,
            id:34
        },
        {
            text: "third plan fifth feature",
            img: greentick,
            id:35
        },
        {
            text: "third plan sixth feature",
            img: greentick,
            id:36
        },
        {
            text: "third plan seventh feature",
            img: greentick,
            id:37
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
export default ThirdPlan;


const styles = StyleSheet.create({
    Container: {

    },
    content: {
        // backgroundColor: "green",
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