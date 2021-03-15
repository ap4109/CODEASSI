import React from 'react'
import { View, FlatList, Animated, ActivityIndicator } from 'react-native'

import CarouselItem from "./CarouselItem"

const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    if (data && data.length) {
        return (
            <View>
                <FlatList data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    vertical
                    pagingEnabled
                    scrollEnabled
                    initialNumToRender={10}
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                />
            </View>
        )
    }

    return null
    // <ActivityIndicator size={'large'} color="blue" />
}

export default Carousel