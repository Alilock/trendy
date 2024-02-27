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
        <Video
            ref={video}
            style={{ width: width, height: height, transform: [{ scale: 1.25, }, { translateX: 39 }] }}
            isLooping
            source={item.video}
        />
    );
}

export default Step;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundVideo: {
    },
});