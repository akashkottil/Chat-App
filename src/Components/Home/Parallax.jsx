import { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

// images

import img1 from '../../assets/Influencers/sreya.jpg'
import img2 from '../../assets/Influencers/bellie.png'
import img3 from '../../assets/Influencers/helen.png'
import img4 from '../../assets/Influencers/keira.png'
import img5 from '../../assets/Influencers/lilly.png'


const PAGE_WIDTH = Dimensions.get('window').width;



const list = [
    {
        id: '1',
        title: 'sreya',
        color: '#26292E',
        img: img1
    },
    {
        id: '2',
        title: 'bellie',
        color: '#899F9C',
        color: '#899F9C',
        img: img2
    },
    {
        id: '3',
        title: 'helen',
        color: '#B3C680',
        img: img3
    },
    {
        id: '4',
        title: 'keira',
        color: '#5C6265',
        img: img4
    },
    {
        id: '5',
        title: 'lilly',
        color: '#F5D399',
        img: img5
    }
];

function Parallax() {
  const [isVertical, setIsVertical] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const progressValue = useSharedValue(0);
  const baseOptions = isVertical
    ? {
      vertical: true,
    }
    : 
    {
      vertical: false,
      width: PAGE_WIDTH ,
      height: PAGE_WIDTH * 0.6,
    };

  return (
    <View style={styles.container}>
            <Carousel 
                width={PAGE_WIDTH}
                height={PAGE_WIDTH * 0.6}
                vertical={false}
                loop
                pagingEnabled={pagingEnabled}
                snapEnabled={snapEnabled}
                autoPlay={autoPlay}
                autoPlayInterval={1500}
                onProgressChange={(_, absoluteProgress) => (progressValue.value = absoluteProgress)}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                data={list}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.img} style={styles.images} />
                        <View style={styles.blackShade}></View>
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardName}>{item.title}</Text>
                            <Text style={styles.cardTag}>{item.nameTag}</Text>
                        </View>
                    </View>
                )}
            /> 
        </View>
  );
}


export default Parallax;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: "space-between",
        alignItems: "center"
    },
    card: {
        width: 380,
        height: PAGE_WIDTH * 0.6,
        borderRadius: 30,
        position: "relative",
        overflow: "hidden" ,
    },
    images: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    blackShade: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "black",
        opacity: 0.3
    },
    cardDetails: {
        position: "absolute",
        bottom: 12,
        left: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 20
    },
    cardName: {
        color: "white",
        fontWeight: "600",
        fontSize: 16
    },
    cardTag: {
        color: "white",
    }
});
