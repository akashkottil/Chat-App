import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';

const { width: windowWidth } = Dimensions.get('window');

const images = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
];

const Home = () => {
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const renderItem = ({ item, index }) => {
    const parallaxStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: interpolate(
              scrollX.value,
              [(index - 1) * windowWidth, index * windowWidth, (index + 1) * windowWidth],
              [-windowWidth * 0.2, 0, windowWidth * 0.2],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    });

    return (
      <View style={styles.slide}>
        <Animated.Image source={{ uri: item }} style={[styles.image, parallaxStyle]} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        
      >
        {images.map((image, index) => {
          return renderItem({ item: image, index });
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: windowWidth,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: '100%',
  },
});
