import React, { Component } from "react";
import {
    View,
    ScrollView,
    Animated,
    StyleSheet,
    TouchableOpacity,
    useColorScheme
} from "react-native";
import colorTheme from "../../DarkMode/darkMode";



// Functional component to wrap the class component and pass color scheme as prop
const SegmentControlWrapper = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
    return <SegmentControl {...props} isDarkMode={isDarkMode} />;
};

class SegmentControl extends Component {
    state = {
        scrollX: new Animated.Value(0),
        containerWidth: 0
    };

    render() {
        const { segments = [], color = "#4549D1", isDarkMode } = this.props;
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
                                this.renderSegment(numberOfSegments, segment.title, index, isDarkMode)
                            )}
                        </View>
                    </ScrollView>
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

    renderSegment = (numberOfSegments, title, index, isDarkMode) => {
        const input = Array.from(
            { length: numberOfSegments },
            (value, key) => key
        ).map(key => key * this.state.containerWidth);

        const output = Array.from(
            { length: numberOfSegments },
            (value, key) => key
        ).map(key => (key === index ? "white" : "#828282"));

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
                <Animated.View style={styles.segmentTab}>
                    <Animated.Text style={[styles.segmentTabText, { color }]}>{title}</Animated.Text>
                </Animated.View>
            </TouchableOpacity>
        );
    };

    handleOnScroll = (x) => {
        const mover = Animated.event([
            { nativeEvent: { contentOffset: { x: this.state.scrollX } } }
        ],
        { useNativeDriver: false });
        mover(x);
    };
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: colorTheme.bgColor,
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
    segmentTabText: {
        fontWeight: "600",
        fontSize: 16,
        textAlign: "center",
        color: colorTheme.segmentTabText,
        
    },
    animatedSeparator: {
        height: 2
    },
    segmentTab: {
        width: "auto",
        height: 40,
        backgroundColor: colorTheme.segmentTab,
        borderRadius: 20,
        paddingHorizontal: 25,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        elevation: 6,
    }
});

export default SegmentControlWrapper;
