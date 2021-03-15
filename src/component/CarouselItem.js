import React, { useState } from 'react';
import { Animated, StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Separator from "./Separator"
const CarouselItem = (props) => {
  const [value, setValue] = useState(new Animated.Value(200))
  const [animationView, setAnimationView] = useState(false)
  var str = props.item.status;
  str = str.substring(0, 1).toLowerCase() + str.substring(1);

  const toggleAnimation = () => {
    if (animationView == true) {
      Animated.timing(value, {
        toValue: 200,
        timing: 300,
        useNativeDriver: false
      }).start(() => {
        setAnimationView(false)
      });
    }
    else {
      Animated.timing(value, {
        toValue: 230,
        timing: 300,
        useNativeDriver: false
      }).start(

        setAnimationView(true)
      );
    }
  }

  const animatedStyle = { height: value }
  return (

    <View style={[styles.MainContainer]}>
      <Animated.View style={[styles.animatedBox, animatedStyle]}>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <View style={{ height: 70, width: 70, backgroundColor: str, borderRadius: 35, justifyContent: "center", alignItems: "center", elevation: 2, }}>
            <Text style={{ color: "white", fontSize: 30 }}>W</Text>
          </View>
          <View style={{ flexDirection: "column", justifyContent: 'center', padding: 10 }}>
            <Text>{props.item.title}</Text>
            <Text>{props.item.subtitle}</Text>
          </View>
        </View>
        <Separator />
        <View style={{
          flexDirection: "row", alignItems: 'center'
        }} >
          <Icon name="calendar-alt" size={20} color="gray" style={{ padding: 10 }} />
          <Text style={{ color: "gray" }}>Created: <Text style={{ color: "black" }}>{props.item.created}</Text></Text>
        </View>
        <Separator />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="list-ul" color="gray" size={20} style={{ padding: 10 }} />
          <Text>{props.item.short_desc}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="clipboard-list" color="gray" size={20} style={{ padding: 10 }} />
          <Text>{props.item.long_desc}</Text>
        </View>

      </Animated.View>
      <View style={{  height: 35,  alignItems: 'center', justifyContent: 'center' }}>

        <TouchableOpacity onPress={toggleAnimation}>
        { animationView?  <Icon name="chevron-up" size={20} />:<Icon name="chevron-down" size={20} />}
        </TouchableOpacity>
      </View>


    </View>
  );

};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    overflow: 'hidden',


  },
  animatedBox:
  {
    width: 400,
    elevation: 2, overflow: 'hidden',
    height: 200,
   borderRadius:5
  },

  text: {
    color: '#FFFFFF',

  }

});
export default CarouselItem