import { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";
import  {useSharedValue,} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

// images
import img1 from '../../assets/Influencers/sreya.jpg';
import img2 from '../../assets/Influencers/bellie.png';
import img3 from '../../assets/Influencers/helen.png';
import img4 from '../../assets/Influencers/keira.png';
import img5 from '../../assets/Influencers/lilly.png';

const PAGE_WIDTH = Dimensions.get('window').width;

const influencers = [
    {
        id: '6',
        name: 'sreya',
        img: img1,
    },
    {
        id: '2',
        name: 'bellie',
        img: img2,
    },
    {
        id: '3',
        name: 'helen',
        img: img3,
    },
    {
        id: '4',
        name: 'keira',
        img: img4,
    },
    {
        id: '5',
        name: 'lilly',
        img: img5,
    },
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
        : {
            vertical: false,
            width: PAGE_WIDTH,
            height: PAGE_WIDTH * 0.6,
        };

    const navigation = useNavigation();

    const handleProfileClick = (profile) => {
        navigation.navigate('personalChat', { userId: profile.id, userName: profile.name, userImage: profile.img });
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
                data={influencers}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.id} onPress={() => handleProfileClick(item)}>
                        <View style={styles.card}>
                            <Image source={item.img} style={styles.images} />
                            <View style={styles.blackShade}></View>
                            <View style={styles.cardDetails}>
                                <Text style={styles.cardName}>{item.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
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
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        width: PAGE_WIDTH,
        height: PAGE_WIDTH * 0.6,
        borderRadius: 30,
        position: "relative",
        overflow: "hidden",
    },
    images: {
        width: '100%',
        height: '100%',
        // resizeMode: 'cover',
        resizeMode:"cover"
        
    },
    blackShade: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "black",
        opacity: 0.3,
    },
    cardDetails: {
        position: "absolute",
        bottom: 12,
        left: 12,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        zIndex: 20,
    },
    cardName: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
});
