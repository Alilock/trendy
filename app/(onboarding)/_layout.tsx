import React, { useRef } from 'react';
import { SafeAreaView, FlatList, View, Text, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Video } from 'expo-av';
import Step from '../../src/components/onboarding/Step';
const { width, height } = Dimensions.get('window');

const data = [
    { key: '1', title: 'Step 1', video: require("../../assets/onboarding/step11.mp4") },
    // { key: '2', title: 'Step 2', video: '@/assets/onboarding/step11.mp4' },
    // { key: '3', title: 'Step 3', video: '@/assets/onboarding/step11.mp4' },
    // { key: '4', title: 'Step 4', video: '@/assets/onboarding/step11.mp4' },
];




const Onboarding = () => {
    // const pagerRef = useRef(null);

    return (
        <View style={{ width: width, height: height }}>
            <PagerView
                style={{ width: width, height: height }}
                // ref={pagerRef}
                onPageSelected={(e) => {
                    // pagerRef.current.setPage(e.nativeEvent.position);
                }}
            >
                <FlatList
                    data={data}
                    horizontal
                    contentContainerStyle={{
                        backgroundColor: 'yellow', padding: 0, margin: 0, justifyContent: 'center', alignItems: 'center'
                    }}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Step item={item} />}
                    keyExtractor={(item) => item.key}
                />
            </PagerView>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {data.map((_, i) => (
                    <View
                        key={i}
                        style={{
                            height: 10,
                            width: 10,
                            // backgroundColor: i === pagerRef.current?.getPage() ? 'blue' : 'gray',
                            margin: 5,
                            borderRadius: 5,
                        }}
                    />
                ))}
            </View>
        </View >
    );
};

export default Onboarding;