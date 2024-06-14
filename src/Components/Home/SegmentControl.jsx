import React, { Component } from "react";
import {
    View,
    ScrollView,
    Animated,
    StyleSheet,
    ViewProperties,
    TouchableOpacity
} from "react-native";
import Colors from "../../Constants/Colors";

class SegmentControl extends Component {
    state = {
        scrollX: new Animated.Value(0),
        containerWidth: 0
    };

    render() {
        const { segments = [], color = "#4549D1" } = this.props;
        const numberOfSegments = segments.length;
        const { containerWidth } = this.state;

        const activeMargin = this.state.scrollX.interpolate({
            inputRange: [0, (numberOfSegments - 1) * containerWidth],
            outputRange: [
                0,
                (numberOfSegments - 1) * containerWidth / numberOfSegments
            ]
        });

        return (
            <View
                style={styles.card}
                onLayout={event => {
                    const { width } = event.nativeEvent.layout;
                    this.setState({ containerWidth: width });
                }}
            >
                <View style={styles.container}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <View style={styles.headerContainer}>
                            {segments.map((segment, index) =>
                                this.renderSegment(numberOfSegments, segment.title, index)
                            )}
                        </View>
                    </ScrollView>
                    {/* <Animated.View
                        style={[
                            styles.animatedSeparator,
                            {
                                width: containerWidth / numberOfSegments,
                                marginLeft: activeMargin,
                                backgroundColor: color
                            }
                        ]}
                    /> */}
                    {/* <View style={styles.separatorStyle} /> */}

                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={this.handleOnScroll}
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        ref={ref => (this.scrollView = ref)}
                    >
                        {segments.map((segment, index) => {
                            return (
                                <View style={{ width: containerWidth }} key={index} >
                                    {segment.view(segment.viewProps)}
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        );
    }

    renderSegment = (numberOfSegments, title, index) => {
        const input = Array.from(
            { length: numberOfSegments },
            (value, key) => key
        ).map(key => key * this.state.containerWidth);

        const output = Array.from(
            { length: numberOfSegments },
            (value, key) => key
        ).map(key => (key === index ? "black" : "#828282"));

        if (output.length < 2) {
            return <View key={index} />;
        }

        const color = this.state.scrollX.interpolate({
            inputRange: input,
            outputRange: output,
            extrapolate: "clamp"
        });

        return (
            <TouchableOpacity
                style={styles.headerItem}
                onPress={() => {
                    this.scrollView.scrollTo({
                        x: index * this.state.containerWidth,
                        y: 0,
                        animated: true
                    });
                }}
                key={index}
            >
                <Animated.View style={styles.test}>
                    <Animated.Text style={[styles.title, { color }]}>{title}</Animated.Text>
                </Animated.View>
            </TouchableOpacity>
        );
    };

    handleOnScroll = x => {
        const mover = Animated.event([
            { nativeEvent: { contentOffset: { x: this.state.scrollX } } }
        ],
        { useNativeDriver: false }
    );
        mover(x);
    };
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 6,
        shadowColor: "black",
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.1,
        elevation: 3
    },
    separatorStyle: {
        height: 1,
        backgroundColor: "#E0E0E0"
    },
    container: {
        overflow: "hidden"
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerItem: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 16,
    },
    title: {
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center"
    },
    animatedSeparator: {
        height: 2
    },
    test: {
        width: "auto",
        height: 40,
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        paddingHorizontal: 25,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        // marginVertical: 5,
        elevation: 6,
    }
});

export default SegmentControl;
