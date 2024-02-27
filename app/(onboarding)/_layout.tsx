import React, { useRef } from 'react';
import { SafeAreaView, FlatList, View, Text, Dimensions, Animated } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Video } from 'expo-av';
import Step from '../../src/components/onboarding/Step';
const { width, height } = Dimensions.get('window');

const data = [
    { key: '1', title: 'Step 1', video: require("../../assets/onboarding/step11.mp4") },
    { key: '2', title: 'Step 2', video: require("../../assets/onboarding/step2.mp4") },
    { key: '3', title: 'Step 3', video: require("../../assets/onboarding/step3.mp4") },
    // { key: '4', title: 'Step 4', video: require("../../assets/onboarding/step4.mp4") },
];




const Onboarding = () => {
    const pagerRef = useRef(null);
    const [currentPage, setCurrentPage] = React.useState(0); // Add this line
    const scrollX = useRef(new Animated.Value(0)).current; // Add this line
    return (
        <View style={{ width: width, height: height, overflow: 'hidden' }}>
            <PagerView
                style={{ width: width, height: height, overflow: 'hidden' }}
                ref={pagerRef}
                onPageSelected={(e) => {
                    const page = e.nativeEvent.position;
                    pagerRef?.current.setPage(page);
                    setCurrentPage(page); // Add this line
                }}
            >
                <FlatList
                    data={data}
                    horizontal
                    contentContainerStyle={{ overflow: 'hidden' }}
                    pagingEnabled

                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    onMomentumScrollEnd={(e) => {
                        setCurrentPage(e.nativeEvent.contentOffset.x / width);
                    }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Step item={item} />}
                    keyExtractor={(item) => item.key}
                />
            </PagerView>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                right: 0,
                left: 0,
                gap: 24,
                bottom: 68,
            }}>
                <View>

                </View>
                {data.map((_, i) => {
                    const inputRange = [
                        (i - 1) * width,
                        i * width,
                        (i + 1) * width
                    ];
                    const color = scrollX.interpolate({
                        inputRange: inputRange,
                        outputRange: ['transparent', 'white', 'transparent'],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View
                            key={i}
                            style={{
                                height: 12,
                                width: 12,
                                backgroundColor: color,
                                borderRadius: 6,
                                borderWidth: 1.5,
                                borderColor: 'white',

                            }}
                        />
                    )
                }
                )}
                <View></View>
            </View>

        </View >
    );
};

export default Onboarding;