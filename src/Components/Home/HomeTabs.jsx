import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../../Constants/Colors'


const HomeTabs = () => {
  const [tabName, setTabName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}  >
                <View style={styles.tab}><Text style={styles.tabText}>All</Text></View>
                <View style={styles.tab}><Text style={styles.tabText}>Latest</Text></View>
                <View style={styles.tab}><Text style={styles.tabText}>New Models</Text></View>
                <View style={styles.tab}><Text style={styles.tabText}>Verified</Text></View>
                <View style={styles.tab}><Text style={styles.tabText}>Active Now</Text></View>

            </ScrollView>
      </View>
    </View>
  )
}

export default HomeTabs

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    tab:{
        width:"auto",
        height:40,
        backgroundColor:Colors.secondary,
        borderRadius:20,
        paddingHorizontal:25,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:5,
        marginVertical:5,
        elevation: 6,
    },
    tabText:{
        fontSize:20,
        fontWeight:"600"
    }
    
})