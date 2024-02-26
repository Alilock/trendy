import { Video } from "expo-av";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
const { width, height } = Dimensions.get('window');

const Step = ({ item }) => {
    const video = React.useRef<Video>(null);
    useEffect(() => {
        video.current?.playAsync();
        // return () => {
        //     video.current?.unloadAsync();
        // };
    }, []);

    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={{ width: width, height: height }}
                isLooping
                source={item.video}
            />
            <Text>{item.title}</Text>
        </View>
    );
}

export default Step;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    backgroundVideo: {
    },
});